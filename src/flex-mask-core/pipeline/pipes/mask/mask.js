import removeMask from './remove-mask'
import applyMask from './apply-mask'
import extractMask from './extract-mask'

const reverseString = str => Array.from(str).reverse().join('')

const Mask = (context) => {

  context.stringMask = context.direction === 'right' ? context.stringMask : reverseString(context.stringMask)

  context.mask = extractMask(context.stringMask)

  context.prevHooks.push(removeMask)

  context.applyHook = applyMask
}

export default Mask
