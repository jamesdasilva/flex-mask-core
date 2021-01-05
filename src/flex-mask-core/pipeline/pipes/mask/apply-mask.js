const applyMask = (context) => {

  let valueWithMask = context.value

  for(let i = 0; i < context.mask.length; i++) {

    if(valueWithMask.length > context.mask[i].start) {

      const valueArr = Array.from(valueWithMask)

      valueArr.splice(context.mask[i].start, 0, context.mask[i].token)
      
      valueWithMask = valueArr.join('')
    }
  }
  context.value = valueWithMask
}

export default applyMask
