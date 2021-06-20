import removeMask from './remove-mask'
import applyMask from './apply-mask'
import extractMask from './extract-mask'

const Mask = (context) => {
  context.mask = extractMask(context.tokens)

  context.beforeExec.push(removeMask)

  context.exec = applyMask
}

export default Mask
