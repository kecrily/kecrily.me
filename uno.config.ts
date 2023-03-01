import type { CSSObject } from 'unocss'
import {
  defineConfig,
  presetAttributify, presetIcons, presetTagify,
  presetTypography, presetUno,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

const cssExtend: Record<string, CSSObject> = {
  'p': {
    'line-break': 'loose'
  },
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
    'color': 'inherit',
    'font-style': 'normal',
    'opacity': '.8'
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
    'background-color': '#EFEFEE'
  },
  'p code': {
    'white-space': 'normal',
    'word-wrap': 'break-word'
  }
}

export default defineConfig({
  shortcuts: {
    'bg-base': 'dark:bg-[#0E141B]',
    'text-base': 'dark:text-[#D6D3D1]'
  },
  presets: [
    presetUno({ dark: 'media' }),
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
