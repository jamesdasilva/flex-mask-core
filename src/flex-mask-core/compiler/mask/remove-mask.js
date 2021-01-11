import { regExTokens } from '../../helpers/utils'

const removeMask = (context) => {
  context.value = Array.from(context.value).filter(char => (new RegExp(`^${regExTokens['*']}`)).test(char)).join('')
}

export default removeMask
