import makeFilter from './make-filter'
import trucateValue from './trucate-value'

const Filter = context => {
  
  context.filter = makeFilter(context.tokens)

  context.afterExec.unshift(trucateValue)
}

export default Filter
