import { commaFormat } from '@/utils'

const numberFormat = (value) => {
  if (!value) return 0
  return commaFormat(value)
}

export default {
  numberFormat,
}
