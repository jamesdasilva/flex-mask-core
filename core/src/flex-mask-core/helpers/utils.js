export const keyCharsEnum = Object.freeze({
  ONLY_NUMBER: '9',
  ONLY_CHAR: 'A',
  CHAR_NUMBER: '*',
  CHAR_NUMBER_SPACE: '_'
})

export const keyChars = Object.keys(keyCharsEnum).map(key => keyCharsEnum[key])

export const regExTokens = Object.freeze({
  '9': '[0-9]', 
  'A': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]', 
  '*': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9]',
  '_': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9]',
})

export const escapeChars = Object.freeze({
  '/': '\/',
  '.': '\\.',
  '-': '\\-',
  '(': '\\(',
  ')': '\\)',
  '*': '\\*',
  '+': '\\+',
  '^': '\\^',
  '$': '\\$',
  '[': '\\[',
  ']': '\\]',
  '{': '\\{',
  '}': '\\}',
})

export const escapeCharsFn = (chars) => {
  return Array.from(chars).map(char => escapeChars[char] || char).join('')
}
 