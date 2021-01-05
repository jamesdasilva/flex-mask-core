import extractTokens from '../extract-tokens'
import removeMask from './remove-mask'

const reverseString = str => Array.from(str).reverse().join('')

const extractMask = (context, next = () => {}) => {

  context.stringMask = context.direction === 'right' ? context.stringMask : reverseString(context.stringMask)

  context.mask = extractTokens(context.stringMask).filter(token => !token.keyChar).map(token => ({
    token: token.token,
    start: token.start,
  }))

  context.prevHooks.push(removeMask)
  
  next()
}

export default extractMask
