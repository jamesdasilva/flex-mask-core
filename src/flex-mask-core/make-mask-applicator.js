import extractMask from './extract-mask'
import applyMask from './apply-mask'

const makeMaskApplicator = (maskStr) => {
  let mask = extractMask(maskStr)
  return (newValue) => {
    return applyMask(mask, newValue)
  }
}
export default makeMaskApplicator
