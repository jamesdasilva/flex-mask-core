import extractTokens from './extract-tokens'

const extractMask = (stringMask) => {
	return extractTokens(stringMask).filter(token => !token.keyChar).map(token => ({
    token: token.token,
    start: token.start,
	}))
}

export default extractMask
