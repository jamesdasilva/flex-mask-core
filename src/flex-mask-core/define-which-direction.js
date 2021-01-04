const defineWhichDirection = maskStr => {
  let direction = 'right'
  let _maskStr = maskStr

  const maskStrWithRightDirection = maskStr?.match(/\>\>.+/) ?? []
  if (maskStrWithRightDirection.length > 0) {
    direction = 'right'
    _maskStr = maskStrWithRightDirection[0].slice(2, maskStrWithRightDirection[0].length)
  }

  const maskStrWithLeftDirection = maskStr?.match(/\<\<.+/) ?? []
  if (maskStrWithLeftDirection.length > 0) {
    direction = 'left'
    _maskStr = maskStrWithLeftDirection[0].slice(2, maskStrWithLeftDirection[0].length)
  }
  
  return { direction, maskStr: _maskStr }
}

export default defineWhichDirection
