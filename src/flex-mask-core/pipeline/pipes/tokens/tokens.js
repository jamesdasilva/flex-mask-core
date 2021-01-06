import extractTokens from './extract-tokens'
import reverseMaskStrIfApplicable from '../mask/reverse-maskstr-if-applicable'

const Tokens = context => {
	context.stringMask = reverseMaskStrIfApplicable(context)
  context.tokens = extractTokens(context.stringMask)
}

export default Tokens