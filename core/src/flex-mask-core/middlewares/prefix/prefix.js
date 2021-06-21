import removePrefix from './remove-prefix'
import applyPrefix from './apply-prefix'

const removeCmd = prefixWithCmd => prefixWithCmd.slice(2, prefixWithCmd.length - 1)

const Prefix = context => {
  let prefix = ''
  let maskStr = context.stringMask

  const prefixWithCmdArray = maskStr?.match(/:\[[^;]+;/) ?? []
  const hasPrefix = prefixWithCmdArray.length > 0

  if (hasPrefix) {
    const prefixWithCmd = prefixWithCmdArray[0]
    prefix = removeCmd(prefixWithCmd)
    const start = prefixWithCmdArray['index']
    maskStr = maskStr.slice(start + prefixWithCmd.length, maskStr.length)
  }

  context.prefix = prefix
  context.stringMask = maskStr
  context.beforeExec.push(removePrefix)
  context.afterExec.push(applyPrefix)
}

export default Prefix
