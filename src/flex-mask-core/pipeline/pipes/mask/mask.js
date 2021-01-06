import removeMask from './remove-mask'
import applyMask from './apply-mask'
import extractMask from './extract-mask'
import reverseValueIfApplicable from './reverse-value-if-applicable'

const Mask = (context) => {

  context.mask = extractMask(context.tokens)

  context.prevHooks.push(removeMask, reverseValueIfApplicable)

  context.applyHook = applyMask

  context.rearHooks.unshift(reverseValueIfApplicable)
}

export default Mask
