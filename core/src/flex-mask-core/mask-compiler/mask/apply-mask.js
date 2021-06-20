const applyMask = (context) => {
  if(context.direction === 'right') {
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

  if(context.direction === 'left') {
    let valueWithMask = context.value 
    const { maxLimit } = context

    for(let i = context.mask.length - 1; i >= 0; i--) {
      const lastPosition = maxLimit - 1
      const invertedPosition = lastPosition - context.mask[i].start

      if(valueWithMask.length > invertedPosition) {
        const valueArr = Array.from(valueWithMask)
        const insertPos = valueWithMask.length - invertedPosition
        valueArr.splice(insertPos, 0, context.mask[i].token)
        
        valueWithMask = valueArr.join('')
      }
    }
  
    context.value = valueWithMask
  }
}

export default applyMask
