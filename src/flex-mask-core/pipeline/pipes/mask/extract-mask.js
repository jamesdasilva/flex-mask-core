import extractTokens from './extract-tokens'

const extractMask = maskStr => {
  return extractTokens(maskStr).filter(token => !token.keyChar).map(token => ({
    token: token.token,
    start: token.start,
  }))
}

export default extractMask
