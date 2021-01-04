import extractMask from './extract-mask'
import applyMask from './apply-mask'
import expandQuantifiers from './expand-quantifiers'
import defineWhichDirection from './define-which-direction'

const reverseString = str => Array.from(str).reverse().join('')
const getStringMask = (maskStr, direction = 'right') => direction === 'right' ? maskStr : reverseString(maskStr)

const makeMaskApplicator = (maskStr) => {
  const { direction: dir, maskStr: mStr } = defineWhichDirection(maskStr)
  let _maskStr = expandQuantifiers(getStringMask(mStr, dir))
  let mask = extractMask(_maskStr)
  return (newValue) => {
    let _newValue = getStringMask(newValue, dir)
    return getStringMask(applyMask(mask, _newValue), dir)
  }
}
export default makeMaskApplicator
