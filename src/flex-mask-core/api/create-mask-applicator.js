import MaskCompiler from '../compiler/compiler'
import { Quantifiers, Direction, Prefix, Length } from '../middlewares'

const createMaskContext = (maskStr) => {
  return {
    stringMask: maskStr,
    prevHooks: [],
    rearHooks: [],
    applyHook: null
  }
}

const makeApplicator = (maskStr) => {

  const context = createMaskContext(maskStr)

  const maskCompiler = MaskCompiler(context)

  maskCompiler.use(Quantifiers)
  maskCompiler.use(Direction)
  maskCompiler.use(Prefix)
  maskCompiler.use(Length)
  
  maskCompiler.compile(context)

  const maskApplicator = (newValue) => {
    
    context.value = newValue

    maskCompiler.exec(context)
    console.log(context)
    return { ...context }
  }

  maskApplicator.prototype.mask = context.mask
  maskApplicator.prototype.direction = context.direction
  maskApplicator.prototype.prefix = context.prefix
  
  return maskApplicator
} 

export default makeApplicator
