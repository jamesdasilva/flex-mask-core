import removeMask from './remove-mask'
import applyMask from './apply-mask'
import extractMask from './extract-mask'
import reverseMaskStrIfApplicable from './reverse-maskstr-if-applicable'
import reverseValueIfApplicable from './reverse-value-if-applicable'

const Mask = (context) => {

  context.stringMask = reverseMaskStrIfApplicable(context)

  context.mask = extractMask(context.stringMask)

  context.prevHooks.push(removeMask, reverseValueIfApplicable)

  context.applyHook = applyMask

  context.rearHooks.unshift(reverseValueIfApplicable)
}

export default Mask
