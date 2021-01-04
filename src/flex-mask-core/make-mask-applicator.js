import extractMask from './extract-mask'
import applyMask from './apply-mask'
import applyPrefix from './apply-prefix'
import expandQuantifiers from './expand-quantifiers'
import extractDirection from './extract-direction'
import extractPrefix from './extract-prefix'
import removeValuePrefix from './remove-prefix'

const reverseString = str => Array.from(str).reverse().join('')

const getStringMask = (maskStr, direction = 'right') => direction === 'right' ? maskStr : reverseString(maskStr)

const makeMaskApplicator = (maskStr) => {
  const expandedMask = expandQuantifiers(maskStr)
  const { direction, maskStr: mStr } = extractDirection(expandedMask)
  const { prefix, maskStr: mStr2 } = extractPrefix(mStr)
  const mask = extractMask(getStringMask(mStr2, direction))
  return (newValue) => {
    let _newValue = getStringMask(removeValuePrefix(newValue, prefix), direction)
    let valueWithMask = getStringMask(applyMask(mask, _newValue), direction)
    return applyPrefix(prefix, valueWithMask)
  }
}

export default makeMaskApplicator
