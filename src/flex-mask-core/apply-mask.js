const applyMask = (mask, valueStr) => {
  let valueWithMask = valueStr
  for(let i = 0; i < mask.length; i++) {
    if(valueWithMask.length > mask[i].start) {
      const valueArr = Array.from(valueWithMask)
      valueArr.splice(mask[i].start, 0, mask[i].token)
      valueWithMask = valueArr.join('')
    }
  }
  return valueWithMask
}
export default applyMask