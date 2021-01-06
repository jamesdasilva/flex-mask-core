const extractMask = tokens => {
  return tokens.filter(token => !token.keyChar).map(token => ({
    token: token.token,
    start: token.start,
  }))
}

export default extractMask
