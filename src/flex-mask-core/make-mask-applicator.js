import extractMask from './extract-mask'
import applyMask from './apply-mask'
import applyPrefix from './apply-prefix'
import expandQuantifiers from './expand-quantifiers'
import extractDirection from './extract-direction'
import extractPrefix from './extract-prefix'
import removePrefix from './remove-prefix'
import removeMask from './remove-mask'

const reverseString = str => Array.from(str).reverse().join('')

const getStringMask = (maskStr, direction = 'right') => direction === 'right' ? maskStr : reverseString(maskStr)

const Preprocessor = (...middlewares) => {
  const stack = middlewares

  const push = (...middlewares) => {
    stack.push(...middlewares)
  }

  const execute = (context) => {
    let prevIndex = -1

    const runner = (index) => {
      if (index === prevIndex) {
        throw new Error('next() called multiple times')
      }

      prevIndex = index

      const middleware = stack[index]

      if (middleware) {
        middleware(context, () => {
          return runner(index + 1)
        })
      }
    }

    runner(0)
  }

  return { push, execute }
}

const makeMaskApplicator = (maskStr) => {
  const context = {
    stringMask: maskStr
  }
  const preprocessor = Preprocessor()
  //preprocessor.push()
  // pre processamento
  expandQuantifiers(context)
  extractDirection(context)
  const get = mStr => getStringMask(mStr, context.direction)
  extractPrefix(context)
  const mask = extractMask(get(context.stringMask))
  const _applyMask = mStr => applyMask(mask, mStr)
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
