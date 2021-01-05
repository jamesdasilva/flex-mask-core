import applyMask from './apply-mask'
import applyPrefix from './apply-prefix'
import removePrefix from './remove-prefix'
import removeMask from './remove-mask'
import Preparer, { expandQuantifiers, extractMask, extractDirection, extractPrefix } from './preparer'

const reverseString = str => Array.from(str).reverse().join('')

const getStringMask = (maskStr, direction = 'right') => direction === 'right' ? maskStr : reverseString(maskStr)

const makeMaskApplicator = (maskStr) => {
  const context = {
    stringMask: maskStr
  }

  const preparer = Preparer()
  preparer.push(
    expandQuantifiers,
    extractDirection,
    extractPrefix,
    extractMask
  )

  preparer.execute(context)

  const get = mStr => getStringMask(mStr, context.direction)
  const _applyMask = mStr => applyMask(context.mask, mStr)
  const _applyPrefix = mStr => applyPrefix(context.prefix, mStr)

  return (newValue) => {
    // processamento
    const valueNoPrefix = removePrefix(newValue, context.prefix)
    const valueNoPrefixNoMask = removeMask(valueNoPrefix)
    const valueNoPrefixNoMaskI = get(valueNoPrefixNoMask)
    const valueNoPrefixWithMaskI = _applyMask(valueNoPrefixNoMaskI)
    const valueNoPrefixWithMask = get(valueNoPrefixWithMaskI)
    const valueWithPrefixAndMask = _applyPrefix(valueNoPrefixWithMask)
    return valueWithPrefixAndMask
  }
}

export default makeMaskApplicator
