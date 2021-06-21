import removePostfix from './remove-postfix'
import applyPostfix from './apply-postfix'

const removeCmd = postfixWithCmd => postfixWithCmd.slice(2, postfixWithCmd.length - 1)

const Postfix = context => {
  let postfix = ''
  let maskStr = context.stringMask

  const postfixWithCmdArray = maskStr?.match(/:\][^;]+;/) ?? []
  const hasPostfix = postfixWithCmdArray.length > 0

  if (hasPostfix) {
    const postfixWithCmd = postfixWithCmdArray[0]
    postfix = removeCmd(postfixWithCmd)
    const start = postfixWithCmdArray['index']
    maskStr = maskStr.slice(start + postfixWithCmd.length, maskStr.length)
  }

  context.postfix = postfix
  context.stringMask = maskStr
  context.beforeExec.push(removePostfix)
  context.afterExec.push(applyPostfix)
}

export default Postfix
