export const keyChars = ['9', 'A', '*']
export const regExTokens = {
  '9': '[0-9]', 
  'A': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]', 
  '*': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9]',
}
export const escapeChars = {
  '/': '\/',
  '.': '\\.',
  '-': '\\-',
  '(': '\\(',
  ')': '\\)',
  '*': '\\*',
  '+': '\\+',
}
export const escapeCharsFn = (chars) => {
  return Array.from(chars).map(char => escapeChars[char]).join('')
}
 