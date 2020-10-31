import extractMask from './extract-mask'
import applyMask from './apply-mask'

const useMask = (maskStr) => {
  let value = ''
  let mask = extractMask(maskStr)
  let changeValue = (newValue) => {
    return applyMask(mask, newValue)
  }
  return changeValue
}
export default useMask
