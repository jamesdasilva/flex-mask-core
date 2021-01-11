const extractPrefix = (maskStr) => {

  let prefix = ''

  const prefixWithCmd = maskStr?.match(/''[^;]+;/) ?? []

  if (prefixWithCmd.length > 0) {
    prefix = prefixWithCmd[0].slice(2, prefixWithCmd[0].length - 1)
    maskStr = prefixWithCmd['input'].slice(prefixWithCmd['index'] + prefixWithCmd[0].length, prefixWithCmd['input'].length)
  }

  return {
    prefix,
    maskStr
  }
}

export default extractPrefix
