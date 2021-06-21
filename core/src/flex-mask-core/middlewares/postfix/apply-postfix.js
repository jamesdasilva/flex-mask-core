const applyPostfix = (context) => {
  context.value = context.value ? `${context.value}${context.postfix}` : context.value
}

export default applyPostfix
  