import extractMask from '../flex-mask-core/extract-mask'
import applyMask from '../flex-mask-core/pipeline/apply-mask'

const useMask = (maskStr) => {
  let value = ''
  let mask = extractMask(maskStr)
  let changeValue = (newValue) => {
    return applyMask(mask, newValue)
  }
  return changeValue
}
export default useMask
