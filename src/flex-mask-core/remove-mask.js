import { regExTokens } from './key-chars'

const removeMask = (valueWithMask) => {
  return Array.from(valueWithMask).filter(char => (new RegExp(`^${regExTokens['*']}`)).test(char)).join('')
}

export default removeMask
