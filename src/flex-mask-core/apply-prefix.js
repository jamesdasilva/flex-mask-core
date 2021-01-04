const applyPrefix = (prefix = '', valueStr) => {
  return valueStr ? `${prefix}${valueStr}` : valueStr
}

export default applyPrefix
  