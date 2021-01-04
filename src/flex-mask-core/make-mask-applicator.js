import extractMask from './extract-mask'
import applyMask from './apply-mask'
import expandQuantifiers from './expand-quantifiers'

const makeMaskApplicator = (maskStr) => {
  let _maskStr = expandQuantifiers(maskStr)
  let mask = extractMask(_maskStr)
  return (newValue) => {
    return applyMask(mask, newValue)
  }
}
export default makeMaskApplicator
