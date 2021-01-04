const makeExpandedToken = (char, length) => {
  const expandedToken = []
  for(let i = 0; i < length; i++) {
    expandedToken.push(char)
  }
  return expandedToken
}

const expandQuantifiers = (stringMask) => {
  let lengthWithCmd = stringMask?.match(/\^\d+/) ?? []
  if (lengthWithCmd.length === 0) return stringMask
  const length = lengthWithCmd[0].slice(1, lengthWithCmd[0].length)
  const charWithCmd = stringMask?.match(/\>\d{1}|\>\w{1}|\>\*{1}/) ?? []
  if (charWithCmd.length === 0) return stringMask
  const char = charWithCmd[0].slice(1, charWithCmd[0].length)
  const expandedToken = makeExpandedToken(char, length)
  const arrayMask = Array.from(stringMask)
  const start = lengthWithCmd.index
  const del = lengthWithCmd[0].length + charWithCmd[0].length
  arrayMask.splice(start, del, ...expandedToken)
  return expandQuantifiers(arrayMask.join(''))
}

export default expandQuantifiers
