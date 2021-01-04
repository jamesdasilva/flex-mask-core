import extractMask from './extract-mask'
import applyMask from './apply-mask'
import expandQuantifiers from './expand-quantifiers'
import extractDirection from './extract-direction'

const reverseString = str => Array.from(str).reverse().join('')
const getStringMask = (maskStr, direction = 'right') => direction === 'right' ? maskStr : reverseString(maskStr)

const makeMaskApplicator = (maskStr) => {
  const { direction, maskStr: mStr } = extractDirection(maskStr)
  const expandedMask = expandQuantifiers(getStringMask(mStr, direction))
  const mask = extractMask(expandedMask)
  return (newValue) => {
    let _newValue = getStringMask(newValue, direction)
    return getStringMask(applyMask(mask, _newValue), direction)
  }
}
export default makeMaskApplicator
