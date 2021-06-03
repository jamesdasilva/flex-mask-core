import reverseString from '../../helpers/reverse-string'

const reverseValueIfApplicable = context => {
  context.value = context.direction === 'right' ? context.value : reverseString(context.value) 
}

export default reverseValueIfApplicable
