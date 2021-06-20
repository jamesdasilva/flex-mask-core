import extractTokens from './extract-tokens'

const Tokens = context => {
  context.tokens = extractTokens(context.stringMask)
}

export default Tokens