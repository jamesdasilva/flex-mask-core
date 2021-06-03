import removePrefix from './remove-prefix'
import applyPrefix from './apply-prefix'

const Prefix = context => {
  
  let prefix = ''
  let maskStr = context.stringMask

  const prefixWithCmd = maskStr?.match(/''[^;]+;/) ?? []

  if (prefixWithCmd.length > 0) {

    prefix = prefixWithCmd[0].slice(2, prefixWithCmd[0].length - 1)
    maskStr = prefixWithCmd['input'].slice(prefixWithCmd['index'] + prefixWithCmd[0].length, prefixWithCmd['input'].length)
  }

  context.prefix = prefix
  context.stringMask = maskStr
  context.beforeExec.push(removePrefix)
  context.afterExec.push(applyPrefix)
}

export default Prefix
