import type { CSSObject } from 'unocss'
import {
  defineConfig,
  presetAttributify, presetIcons, presetTagify,
  presetTypography, presetUno,
  transformerDirectives, transformerVariantGroup,
} from 'unocss'

const cssExtend: Record<string, CSSObject> = {
  'li>p': {
    margin: 0,
  },
  'hr': {
    'width': '14%',
    'margin-right': 'auto',
    'margin-left': 'auto',
    'border-top': '3px solid #dededc',
  },
  'blockquote': {
    'margin-left': '-24px',
    'padding-left': '20px',
    'border-left-width': '4px',
    'border-left': '3px solid #dadada',
    'color': '#666664',
    'font-style': 'normal',
  },
  'th, td': {
    border: '1px solid #dadada',
    padding: '4px 8px 4px 10px',
  },
  'th:empty': {
    border: 'none',
    padding: 'none',
  },
  'tr:nth-child(even)': {
    'background-color': '#efefee',
  },
}

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography({ cssExtend }),
    presetAttributify({ strict: true }),
    presetIcons({ prefix: '' }),
    presetTagify(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
