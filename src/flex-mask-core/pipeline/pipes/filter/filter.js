import makeFilter from './make-filter'
import trucateValue from './trucate-value'

const Filter = context => {
  
  context.filter = makeFilter(context.tokens)

  context.rearHooks.unshift(trucateValue)
}

export default Filter
