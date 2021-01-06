const trucateValue = context => {

  const exceeded = context.value.length > context.maxLimit

  context.value = exceeded ? context.value.substring(0, context.maxLimit) : context.value
}

export default trucateValue
