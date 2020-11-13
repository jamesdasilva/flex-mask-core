import useMask from './use-mask'

test('useMask("999/9")', () => {
  const changeValue = useMask('999/9')
  expect(changeValue('8888')).toBe('888/8')
})
test('Date format - useMask("99/99/9999")', () => {
  const changeValue = useMask('99/99/9999')
  expect(changeValue('03202508')).toBe('03/20/2508')
})
test('CPF format - useMask("999.999.999-99")', () => {
  const changeValue = useMask('999.999.999-99')
  expect(changeValue('03202508679')).toBe('032.025.086-79')
})
test('CNPJ format - useMask("99.999.999/9999-99")', () => {
  const changeValue = useMask('99.999.999/9999-99')
  expect(changeValue('03202508679976')).toBe('03.202.508/6799-76')
})
test('Credit card format - useMask("9999-9999-9999-9999")', () => {
  const changeValue = useMask("9999-9999-9999-9999")
  expect(changeValue('0320250867998765')).toBe('0320-2508-6799-8765')
})
test('Home phone format - useMask("(99) 9999-9999")', () => {
  const changeValue = useMask("(99) 9999-9999")
  expect(changeValue('0302508679')).toBe('(03) 0250-8679')
})
test('Cell phone format - useMask("(99) 9 9999-9999")', () => {
  const changeValue = useMask("(99) 9 9999-9999")
  expect(changeValue('03202508679')).toBe('(03) 2 0250-8679')
})
test('International phone format - useMask("+55 (99) 9 9999-9999")', () => {
  const changeValue = useMask("+55 (99) 9 9999-9999")
  expect(changeValue('03202508679')).toBe('+55 (03) 2 0250-8679')
})
