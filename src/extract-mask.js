import { keyChars } from './key-chars'

const extractMask = (stringMask) => {
	const arrayMask = Array.from(stringMask)
	let token = {
		token: ''
	}
	const mask = []
	let isToken = false
	for(let i = 0; i <= arrayMask.length; i++) {
		if(!keyChars.includes(arrayMask[i]) && i !== arrayMask.length) {
			if(!isToken) {
				token.start = i
				isToken = true
			}
			token.token += arrayMask[i]
		} else {
			token.end = i
			mask.push(token)
			isToken = false
			token = {
				token: ''
			}
		}
	}
	return mask.filter(item => item.token != '')
}

export default extractMask
