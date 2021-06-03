const trucateValue = context => {
  const exceeded = context.value.length > context.maxLimit
  const start = context.direction === 'left' ? context.value.length - context.maxLimit : 0
  const end = context.direction === 'left' ? context.value.length : context.maxLimit
  context.value = exceeded ? context.value.substring(start, end) : context.value
}

export default trucateValue
