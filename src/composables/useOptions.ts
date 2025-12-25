import { reactive, watch, onMounted, computed } from 'vue'
import type { GeneratorOptions } from '@/utils/SwaggerParser.ts'

const STORAGE_KEY = 'swagger_generator_options'

// 默认的函数模板字符串
const defaultTemplateStr = `(ctx) => {
  const { method, url, functionName, hasQuery, hasBody } = ctx;
  const args = [];
  if (hasQuery) args.push(\`queryParams: \${ctx.queryParamsType}\`);
  if (hasBody) args.push(\`data: \${ctx.requestBodyType}\`);
  return \`export const \${functionName} = (\${args.join(', ')}) => {
  return request.\${method}<\${ctx.responseDataType}>(\\\`\${url}\\\`, { 
    \${hasBody ? 'data,' : ''} 
    \${hasQuery ? 'params: queryParams,' : ''} 
  });
};\`;
}`

export function useOptions() {
  const state = reactive({
    // 基础配置
    indent: 2,
    useInterface: true,
    addExport: true,
    includeComment: true,
    semicolon: true,
    arrayType: 'bracket' as 'bracket' | 'generic',
    int64ToString: true,
    // 命名策略
    namingStrategy: 'removeVO',
    // 函数模板字符串
    requestTemplateRaw: defaultTemplateStr,
  })

  // 加载存储的数据
  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      Object.assign(state, JSON.parse(saved))
    }
  })

  // 监听变化并自动保存
  watch(
    state,
    (newVal) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
    },
    { deep: true },
  )

  // 核心：将 state 转换为 SwaggerToTS 需要的 GeneratorOptions
  const generatorOptions = computed(() => {
    // 1. 转换命名映射器
    const typeNameMapper = (name: string) => {
      if (state.namingStrategy === 'removeVO') return name.replace(/VO$/i, '')
      if (state.namingStrategy === 'removeDTO') return name.replace(/DTO$/i, '')
      if (state.namingStrategy === 'prefixI') return 'I' + name
      return name
    }

    // 2. 将字符串模板激活为函数
    let requestTemplate
    try {
      // 使用 eval 或 new Function 将字符串转为函数
      requestTemplate = eval(state.requestTemplateRaw)
    } catch (e) {
      console.error('模板函数解析错误:', e)
    }

    return {
      ...state,
      typeNameMapper,
      requestTemplate,
    } as GeneratorOptions
  })

  return { state, generatorOptions }
}
