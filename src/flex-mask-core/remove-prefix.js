import { escapeCharsFn } from './key-chars'

const removeValuePrefix = (valueWithPrefix, prefix = '') => {
  return (new RegExp(`^${escapeCharsFn(prefix)}`)).test(valueWithPrefix) 
    ? valueWithPrefix.slice(prefix.length, valueWithPrefix.length) : valueWithPrefix
}

export default removeValuePrefix
