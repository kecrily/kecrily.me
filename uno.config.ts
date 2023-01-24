import type { CSSObject } from 'unocss'
import {
  defineConfig,
  presetAttributify, presetIcons, presetTagify,
  presetTypography, presetUno,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

const cssExtend: Record<string, CSSObject> = {
  'li>p': {
    margin: 0
  },
  'hr': {
    'width': '14%',
    'margin-right': 'auto',
    'margin-left': 'auto',
    'border-top': '.2rem solid #dededc'
  },
  'blockquote': {
    'margin-left': '-1.5rem',
    'padding-left': '1.25rem',
    'border-left': '.25rem solid #dadada',
    'color': '#666664',
    'font-style': 'normal'
  },
  'th, td': {
    border: '.125rem solid #dadada',
    padding: '.25rem .5rem .25rem .625rem'
  },
  'th:empty': {
    border: 'none',
    padding: 'none'
  },
  'tr:nth-child(even)': {
    'background-color': '#efefee'
  }
}

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography({ cssExtend }),
    presetAttributify({ strict: true }),
    presetIcons({ prefix: '' }),
    presetTagify()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
