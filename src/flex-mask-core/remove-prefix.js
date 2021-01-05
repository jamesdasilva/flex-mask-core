import { escapeCharsFn } from './key-chars'

const removePrefix = (valueWithPrefix, prefix = '') => {
  return (new RegExp(`^${escapeCharsFn(prefix)}`)).test(valueWithPrefix) 
    ? valueWithPrefix.slice(prefix.length, valueWithPrefix.length) : valueWithPrefix
}

export default removePrefix
