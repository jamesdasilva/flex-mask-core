import reverseString from '../../helpers/reverse-string'

const reverseMaskStrIfApplicable = context => {
  return context.direction === 'right' ? context.stringMask : reverseString(context.stringMask)
}

export default reverseMaskStrIfApplicable
