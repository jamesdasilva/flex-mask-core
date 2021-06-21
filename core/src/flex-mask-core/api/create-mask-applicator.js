import MaskCompiler from '../mask-compiler'
import MaskRuntime from '../mask-runtime/mask-runtime'
import { Quantifiers, Direction, Prefix, Postfix, Length } from '../middlewares'

const createMaskContext = (maskStr) => {
  return {
    stringMask: maskStr,
    beforeExec: [],
    afterExec: [],
    exec: null
  }
}

const makeApplicator = (maskStr) => {

  const context = createMaskContext(maskStr)

  const maskCompiler = MaskCompiler()
  
  maskCompiler.use(Quantifiers)
  maskCompiler.use(Prefix)
  maskCompiler.use(Postfix)
  maskCompiler.use(Direction)
  maskCompiler.use(Length)
  
  maskCompiler.compile(context)
  
  const maskRunTime = MaskRuntime(context)

  const maskApplicator = (newValue) => {
    
    context.value = newValue

    maskRunTime.exec(context)

    return { ...context }
  }

  maskApplicator.prototype.mask = context.mask
  maskApplicator.prototype.direction = context.direction
  maskApplicator.prototype.prefix = context.prefix
  maskApplicator.prototype.postfix = context.postfix
  maskApplicator.prototype.maxLimit = context.maxLimit
  maskApplicator.prototype.filter = context.filter
  
  return maskApplicator
} 

export default makeApplicator
