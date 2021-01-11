const applyPrefix = (context) => {
  context.value = context.value ? `${context.prefix}${context.value}` : context.value
}

export default applyPrefix
  