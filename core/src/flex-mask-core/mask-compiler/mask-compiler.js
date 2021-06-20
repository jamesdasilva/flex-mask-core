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

  return { use, compile }
}

export default MaskCompiler
