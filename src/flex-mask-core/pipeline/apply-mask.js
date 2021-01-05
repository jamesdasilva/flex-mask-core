const reverseString = str => Array.from(str).reverse().join('')

const get = (maskStr, direction = 'right') => direction === 'right' ? maskStr : reverseString(maskStr)

const applyMask = (context) => {
  let valueWithMask = get(context.value, context.direction)
  for(let i = 0; i < context.mask.length; i++) {
    if(valueWithMask.length > context.mask[i].start) {
      const valueArr = Array.from(valueWithMask)
      valueArr.splice(context.mask[i].start, 0, context.mask[i].token)
      valueWithMask = valueArr.join('')
    }
  }
  context.value = get(valueWithMask, context.direction)
}

export default applyMask
