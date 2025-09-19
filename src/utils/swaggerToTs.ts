import type { Schemas, SwaggerSchema } from '@/api/data.type.ts'

export function schemaToTs(
  schema: SwaggerSchema | undefined,
  definitions: Schemas,
  name = 'ResponseData',
): string {
  if (!schema) return '// 无返回数据'

  const visited = new Set<string>()

  function parse(node: SwaggerSchema | undefined): string {
    if (!node) return 'any'

    if (node.$ref) {
      const key = node.$ref.replace(/^#\/(definitions|components\/schemas)\//, '')
      if (!definitions[key]) return 'any'
      if (visited.has(key)) return key
      visited.add(key)
      return key
    }

    switch (node.type) {
      case 'string':
        return 'string'
      case 'integer':
      case 'number':
        return 'number'
      case 'boolean':
        return 'boolean'
      case 'array':
        return `${parse(node.items)}[]`
      case 'object':
        if (!node.properties) return 'Record<string, any>'
        return (
          '{ ' +
          Object.entries(node.properties)
            .map(([k, v]) => {
              const opt = node.required?.includes(k) ? '' : '?'
              const comment = v.description ? `/** ${v.description} */ ` : ''
              return `${comment}${k}${opt}: ${parse(v)}`
            })
            .join('; ') +
          ' }'
        )
      default:
        return 'any'
    }
  }

  const main = parse(schema)

  const interfaces: string[] = []
  visited.forEach((key) => {
    const def = definitions[key]
    if (!def) return
    if (def.type === 'object' && def.properties) {
      const body = Object.entries(def.properties)
        .map(([k, v]) => {
          const opt = def.required?.includes(k) ? '' : '?'
          const comment = v.description ? `  /** ${v.description} */\n` : ''
          return `${comment}  ${k}${opt}: ${parse(v)}`
        })
        .join(';\n')
      const desc = def.description ? `/** ${def.description} */\n` : ''
      interfaces.push(`${desc}export interface ${key} {\n${body};\n}`)
    } else {
      interfaces.push(`export type ${key} = ${parse(def)};`)
    }
  })

  return `${interfaces.join('\n\n')}\n\nexport type ${name} = ${main};`
}
