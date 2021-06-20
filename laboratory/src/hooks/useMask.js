import { useEffect, useRef } from 'react'
import makeMaskApplicator from 'flex-mask'
// import useCursorManager from './useCursorManager'

const alignTextRight = (inputRef) => {
  inputRef.current.style.textAlign = 'right'
}

const useMask = (maskStr) => {
  // criação da máscara a partir de string mask
  const maskApplicator = makeMaskApplicator(maskStr)

  // parâmetros importantes
  const prefix = maskApplicator.prototype.prefix
  const direction = maskApplicator.prototype.direction
  const maxLimit = maskApplicator.prototype.maxLimit

  const prevRef = useRef('')
  let prevValue = prevRef.current
  const inputRef = useRef()
  // const { secondeHalfLengthRef, setCursorPosition } = useCursorManager(inputRef, { prefix })
  
  const getValue = () => {
    return inputRef.current.value
  }

  const refreshInput = ({ target }) => {
    const clean = target.value.length === 0
    const notExceededMaxLimit = target.value.length <= (maxLimit + prefix.length)
    const emptyField = !prevValue
    const cursorAfterPrefix = inputRef.current.selectionStart >= prefix.length
    
    if(notExceededMaxLimit && (emptyField || cursorAfterPrefix) ) {
      // atualiza o input value
      // console.log('target.value ', target.value)
      inputRef.current.value = maskApplicator(target.value).value
      const { value } = inputRef.current
      // console.log('value ', value)
      // if(value.length - secondeHalfLengthRef.current < 0) {
      //   secondeHalfLengthRef.current = value.length
      // }
      // setCursorPosition(inputRef, value.length - secondeHalfLengthRef.current)
      prevValue = value
    } else {
      if(clean) {
        inputRef.current.value = ''
        prevValue = ''
      } else
        inputRef.current.value = prevValue
      // setCursorPosition(inputRef, prevValue.length - secondeHalfLengthRef.current)
    }
  }

  useEffect(() => {
    inputRef.current.addEventListener('input', refreshInput)
  }, [])

  useEffect(() => {
    if (direction === 'left') {
      alignTextRight(inputRef)
    }
  }, [])

  return {
    inputRef, 
    getValue
  }
}

export default useMask
