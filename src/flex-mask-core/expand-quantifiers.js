const expandQuantifiers = (stringMask) => {
    const lengthWithCmd = stringMask.match(/\^\d+/)
    const length = lengthWithCmd[0].slice(1, lengthWithCmd[0].length)
    const charWithCmd = stringMask.match(/\>\d+|\>\w+|\>\*+/)
    const char = charWithCmd[0].slice(1, charWithCmd[0].length)
    const expandedToken = []
    for(let i = 0; i < length; i++) {
      expandedToken.push(char)
    }
    const arrayMask = Array.from(stringMask)
    const start = lengthWithCmd.index
    const end = lengthWithCmd.index + lengthWithCmd[0].length + charWithCmd[0].length
    arrayMask.splice(start, end, ...expandedToken, ...arrayMask.slice(end, arrayMask.length))
	return arrayMask.join('')
}

export default expandQuantifiers
