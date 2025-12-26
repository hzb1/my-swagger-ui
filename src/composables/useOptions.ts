import { reactive, watch, onMounted, computed } from 'vue'
import type { GeneratorOptions } from '../utils/SwaggerParser'

const STORAGE_KEY = 'swagger_config_v1'
const defaultTemplate = (ctx) => {
  const { method, url, functionName, queryParamsType, requestBodyType, responseDataType } = ctx

  const args = []
  if (ctx.hasQuery) args.push(`params: ${queryParamsType}`)
  if (ctx.hasBody) args.push(`data: ${requestBodyType}`)

  return `export const ${functionName} = (${args.join(', ')}): Promise<${responseDataType}> => {
  return request.${method}(\`${url}\`, { ${ctx.hasBody ? 'data,' : ''} ${ctx.hasQuery ? 'params,' : ''} });
};`
}

export function useOptions() {
  const configState = reactive({
    indent: 2,
    useInterface: true,
    addExport: true,
    semicolon: true,
    arrayType: 'bracket' as const,
    int64ToString: true,
    namingStrategy: 'removeVO',
    requestTemplateRaw: defaultTemplate,
  })

  // 初始化加载
  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) Object.assign(configState, JSON.parse(saved))
  })

  // 持久化监听
  watch(
    configState,
    (val) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    },
    { deep: true },
  )

  const resetTemplate = () => {
    if (confirm('重置模板？')) configState.requestTemplateRaw = defaultTemplate
  }

  // 核心：转换给 SwaggerToTS 使用的配置对象
  const generatorOptions = computed<GeneratorOptions>(() => {
    const typeNameMapper = (name: string) => {
      if (configState.namingStrategy === 'removeVO') return name.replace(/VO$/i, '')
      if (configState.namingStrategy === 'removeDTO') return name.replace(/DTO$/i, '')
      if (configState.namingStrategy === 'prefixI') return 'I' + name
      return name
    }

    let requestTemplate
    try {
      requestTemplate = eval(configState.requestTemplateRaw)
    } catch (e) {
      console.error('Template eval error:', e)
    }

    return { ...configState, typeNameMapper, requestTemplate }
  })

  return { configState, generatorOptions, resetTemplate }
}
