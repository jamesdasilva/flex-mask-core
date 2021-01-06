import makeFilter from './make-filter'

const restoreValueIfInvalid = (context) => {

  context.valueIsValid = false
  
  if(context.filter.test(context.value)) context.valueIsValid = true
}

const Filter = context => {
  
  context.filter = makeFilter(context.tokens)
  context.rearHooks.unshift(restoreValueIfInvalid)
}

export default Filter
