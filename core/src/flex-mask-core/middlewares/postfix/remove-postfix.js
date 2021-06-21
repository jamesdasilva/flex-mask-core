import { escapeCharsFn } from '../../helpers/utils'

const removePostfix = (context) => {
  console.log({ ...context })
  context.value = (new RegExp(`${escapeCharsFn(context.postfix)}$`)).test(context.value) 
    ? context.value.slice(0, context.value.length - context.postfix.length) : context.value
}

export default removePostfix
