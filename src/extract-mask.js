import { keyChars } from './key-chars'

const extractMask = (stringMask) => {
	return Array.from(stringMask)
		.map((char, index) => ({ maskChar: char, index: index }))
		.filter(char => !keyChars.includes(char.maskChar))
}

export default extractMask
