import extractTokens from './extract-tokens'

const extractMask = (stringMask) => {
	return extractTokens(stringMask).filter(token => !token.keyChar)
}

export default extractMask
