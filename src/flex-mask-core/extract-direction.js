const extractDirection = (context, next = () => {}) => {
  let direction = 'right'
  let _maskStr = context.stringMask

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
  
  context.direction = direction
  context.stringMask = _maskStr

  next()
}

export default extractDirection
