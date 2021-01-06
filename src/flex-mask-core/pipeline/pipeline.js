const Pipeline = (...middlewares) => {
  const stack = middlewares

  const push = (...middlewares) => {
    stack.push(...middlewares)
  }

  const prepare = (context) => {
    for(let i = 0; i < stack.length; i++) {
      stack[i](context)
    }
  }

  const shoot = (context) => {
    for(let i = 0; i < context.prevHooks.length; i++) {
      context.prevHooks[i](context)
    }
    // console.log(context)
    context.applyHook(context)

    for(let i = 0; i < context.rearHooks.length; i++) {
      context.rearHooks[i](context)
    }
  }

  return { push, prepare, shoot }
}

export default Pipeline
