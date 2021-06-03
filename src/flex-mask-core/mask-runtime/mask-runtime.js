const MaskRuntime = (ctxt) => {
  const context = ctxt

  const execBefore = () => {
    for(let i = 0; i < context.beforeExec.length; i++) {
      context.beforeExec[i](context)
    }
  }

  const execAfter = () => {
    for(let i = 0; i < context.afterExec.length; i++) {
      context.afterExec[i](context)
    }
  }

  const addBeforeExec = (fn) => {
    context.beforeExec.push(fn)
  }

  const addAfterExec = (fn) => {
    context.afterExec.push(fn)
  }

  const exec = () => {
    execBefore()
    context.exec(context)
    execAfter()
  }

  return {
    context,
    addBeforeExec,
    addAfterExec,
    exec,
  }
}

export default MaskRuntime
