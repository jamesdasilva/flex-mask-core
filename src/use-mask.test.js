
import useMask from './use-mask'

test('useMask("999/9")', () => {
  const changeValue = useMask('999/9')
  expect(changeValue('8888')).toBe('888/8')
})
test('useMask("999.999.999-99")', () => {
  const changeValue = useMask('999.999.999-99')
  expect(changeValue('03202508679')).toBe('032.025.086-79')
})
test('useMask("(99) 9 9999-9999")', () => {
  const changeValue = useMask("(99) 9 9999-9999")
  expect(changeValue('03202508679')).toBe('(03) 2 0250-8679')
})

