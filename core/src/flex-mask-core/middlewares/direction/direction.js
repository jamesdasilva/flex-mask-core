import extractDirection from './extract-direction'

const Direction = (context) => {

  const { direction, stringMask } = extractDirection(context.stringMask)
  
  context.direction = direction
  context.stringMask = stringMask
}

export default Direction
