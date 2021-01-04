const lengthWithCmd = {}
const tokenWithCmd = {}

const makeExpandedToken = (char, length) => {
  const expandedToken = []
  for(let i = 0; i < length; i++) {
    expandedToken.push(char)
  }
  return expandedToken
}

const getLengthWithCmd = maskStr => maskStr?.match(/\^\d+/) ?? []

const getPureLength = stringMask => {
  if(!lengthWithCmd[stringMask])
    lengthWithCmd[stringMask] = getLengthWithCmd(stringMask)
  
  if (lengthWithCmd[stringMask].length === 0) return null

  return lengthWithCmd[stringMask][0].slice(1, lengthWithCmd[stringMask][0].length) 
}

const getTokenWithCmd = maskStr => maskStr?.match(/\>\d+;|\>\w+;|\>.+;/) ?? []

const getPureToken = (stringMask) => {
  tokenWithCmd[stringMask] = getTokenWithCmd(stringMask)
  if (tokenWithCmd[stringMask].length === 0) return null

  return tokenWithCmd[stringMask][0].slice(1, tokenWithCmd[stringMask][0].length - 1)
}

const getStart = (stringMask) => {
  if(!lengthWithCmd[stringMask])
    lengthWithCmd[stringMask] = getLengthWithCmd(stringMask)

  if (lengthWithCmd[stringMask].length === 0) return null

  return lengthWithCmd[stringMask].index
}

const getDel = (stringMask) => {
  if(!lengthWithCmd[stringMask])
    lengthWithCmd[stringMask] = getLengthWithCmd(stringMask)

  if (lengthWithCmd[stringMask].length === 0) return null

  tokenWithCmd[stringMask] = getTokenWithCmd(stringMask)
  if (tokenWithCmd[stringMask].length === 0) return null

  return lengthWithCmd[stringMask][0].length + tokenWithCmd[stringMask][0].length
}

const insertExpandedTokenInStringMask = (stringMask, expandedToken, start, del) => {
  const arrayMask = Array.from(stringMask)
  arrayMask.splice(start, del, ...expandedToken)
  return arrayMask.join('')
}

const expandQuantifiers = (context, next = () => {}) => {
  
  const runner = (stringMask) => {
    const length = getPureLength(stringMask)
    if (!length) return stringMask
  
    const token = getPureToken(stringMask)
    if (!token) return stringMask
  
    const expandedToken = makeExpandedToken(token, length)
    const start = getStart(stringMask)
    const del = getDel(stringMask)
    const newStringMask = insertExpandedTokenInStringMask(stringMask, expandedToken, start, del)

    return runner(newStringMask)
  }

  context.stringMask = runner(context.stringMask)

  next()
}

export default expandQuantifiers
