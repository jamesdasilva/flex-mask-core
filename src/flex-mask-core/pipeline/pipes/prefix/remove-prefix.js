import { escapeCharsFn } from '../../../utils'

const removePrefix = (context) => {
  context.value = (new RegExp(`^${escapeCharsFn(context.prefix)}`)).test(context.value) 
    ? context.value.slice(context.prefix.length, context.value.length) : context.value
}

export default removePrefix
