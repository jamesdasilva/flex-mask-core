import Tokens from './tokens'
import Mask from './mask'
import Filter from './filter'

const MaskCompiler = () => {
  const stack = []

  const use = (...middlewares) => {
    stack.push(...middlewares)
  }

  const compile = (context) => {

    for(let i = 0; i < stack.length; i++) {
      stack[i](context)
    }

    Tokens(context)
    Filter(context)
    Mask(context)
  }

  const exec = (context) => {

    for(let i = 0; i < context.prevHooks.length; i++) {
      context.prevHooks[i](context)
    }
    // console.log(context)
    context.applyHook(context)

    for(let i = 0; i < context.rearHooks.length; i++) {
      context.rearHooks[i](context)
    }
  }

  return { use, compile, exec }
}

export default MaskCompiler
