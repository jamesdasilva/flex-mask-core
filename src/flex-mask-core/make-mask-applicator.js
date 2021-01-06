import Pipeline, { Quantifiers, Mask, Direction, Prefix, Tokens, Filter } from './pipeline'

const makeApplicator = (maskStr) => {

  const context = {
    stringMask: maskStr,
    prevHooks: [],
    rearHooks: [],
    applyHook: null
  }

  const pipeline = Pipeline()

  pipeline.push(
    Quantifiers,
    Direction,
    Prefix,
    Tokens,
    Mask,
    Filter,
  )
  
  pipeline.prepare(context)

  return (newValue) => {
    
    context.value = newValue

    pipeline.shoot(context)

    return context.value
  }
}

export default makeApplicator
