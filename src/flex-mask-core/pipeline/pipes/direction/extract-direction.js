const extractDirection = (maskStr) => {
  let direction = 'right'
  let _maskStr = maskStr

  const maskStrWithRightDirection = _maskStr?.match(/\>\>.+/) ?? []
  if (maskStrWithRightDirection.length > 0) {
    direction = 'right'
    _maskStr = maskStrWithRightDirection[0].slice(2, maskStrWithRightDirection[0].length)
  }

  const maskStrWithLeftDirection = _maskStr?.match(/\<\<.+/) ?? []
  if (maskStrWithLeftDirection.length > 0) {
    direction = 'left'
    _maskStr = maskStrWithLeftDirection[0].slice(2, maskStrWithLeftDirection[0].length)
  }
  
  return {
    direction,
    stringMask: _maskStr
  }
}

export default extractDirection
