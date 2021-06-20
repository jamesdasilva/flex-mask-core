import { useEffect, useRef } from 'react'

const setCursorPosition = (inputRef, newCursorPosition) => {
  inputRef.current.selectionStart = newCursorPosition
  inputRef.current.selectionEnd = newCursorPosition
}

const useCursorManager = (inputRef, { prefix }) => {
  const secondeHalfLengthRef = useRef(0)

  const refreshSecondeHalfLength = () => {
    secondeHalfLengthRef.current = inputRef.current.value.length - inputRef.current.selectionStart
  }

  const refreshCursor = (event) => {
    switch(event.key) {
      case 'ArrowLeft':
        // console.log(`inputRef.current.value.length ${inputRef.current.value.length}`)
        // console.log(`secondeHalfLengthRef.current ${secondeHalfLengthRef.current}`)
        // console.log(`prefix.length ${prefix.length}`)
        // event.preventDefault()
        if(inputRef.current.value.length - secondeHalfLengthRef.current > prefix.length) {
          secondeHalfLengthRef.current = secondeHalfLengthRef.current + 1
        }
        break
      case 'ArrowRight':
        if(secondeHalfLengthRef.current > 0) {
          secondeHalfLengthRef.current = secondeHalfLengthRef.current - 1
        }
        break
      default:
    }
  }

  useEffect(() => {
    inputRef.current.addEventListener('click', refreshSecondeHalfLength)
  }, [])

  useEffect(() => {
    inputRef.current.addEventListener('keydown', refreshCursor) 
  }, [])

  return { secondeHalfLengthRef, setCursorPosition }
}

export default useCursorManager
