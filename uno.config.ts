import {
  defineConfig,
  presetIcons,
  presetTypography, presetWind3,
  transformerDirectives, transformerVariantGroup
} from 'unocss'
import type { CSSObject } from 'unocss'

const cssExtend: Record<string, CSSObject> = {
  'h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a': {
    'text-decoration': 'none'
  },
  'p': {
    'line-break': 'loose'
  },
  'li > p': {
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
  'pre': {
    'background-color': '#2E3440 !important'
  },
  'pre code': {
    color: 'rgb(230 237 243)'
  },
  'p code': {
    'white-space': 'normal',
    'word-wrap': 'break-word'
  }
}

export default defineConfig({
  shortcuts: {
    'bg-base': 'dark:bg-[#0E1116]',
    'text-base': 'dark:text-[#E6EDF3]'
  },
  presets: [
    presetWind3({ dark: 'media' }),
    presetTypography({ cssExtend }),
    presetIcons({ prefix: '' })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
