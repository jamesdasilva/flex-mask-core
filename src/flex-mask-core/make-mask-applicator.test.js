import makeMaskApplicator from './make-mask-applicator'

test('makeMaskApplicator("999/9")', () => {
  const changeValue = makeMaskApplicator('999/9')
  expect(changeValue('8888')).toBe('888/8')
})

test('Date format - makeMaskApplicator("99/99/9999")', () => {
  const changeValue = makeMaskApplicator('99/99/9999')
  expect(changeValue('03202508')).toBe('03/20/2508')
})

test('CPF format - makeMaskApplicator("999.999.999-99")', () => {
  const changeValue = makeMaskApplicator('999.999.999-99')
  expect(changeValue('03202508679')).toBe('032.025.086-79')
})

test('CNPJ format - makeMaskApplicator("99.999.999/9999-99")', () => {
  const changeValue = makeMaskApplicator('99.999.999/9999-99')
  expect(changeValue('03202508679976')).toBe('03.202.508/6799-76')
})

test('Credit card format - makeMaskApplicator("9999-9999-9999-9999")', () => {
  const changeValue = makeMaskApplicator("9999-9999-9999-9999")
  expect(changeValue('0320250867998765')).toBe('0320-2508-6799-8765')
})

test('Credit card format - makeMaskApplicator("^4>9;-9999-9999-9999")', () => {
  const changeValue = makeMaskApplicator("^4>9;-9999-9999-9999")
  expect(changeValue('0320250867998765')).toBe('0320-2508-6799-8765')
})

test('Credit card format - makeMaskApplicator("^4>9;-^4>9;-^4>9;-^4>9;")', () => {
  const changeValue = makeMaskApplicator("^4>9;-^4>9;-^4>9;-^4>9;")
  expect(changeValue('0320250867998765')).toBe('0320-2508-6799-8765')
})

test('Home phone format - makeMaskApplicator("(99) 9999-9999")', () => {
  const changeValue = makeMaskApplicator("(99) 9999-9999")
  expect(changeValue('0302508679')).toBe('(03) 0250-8679')
})

test('Cell phone format - makeMaskApplicator("(99) 9 9999-9999")', () => {
  const changeValue = makeMaskApplicator("(99) 9 9999-9999")
  expect(changeValue('03202508679')).toBe('(03) 2 0250-8679')
})

test('International phone format - makeMaskApplicator("+55 (99) 9 9999-9999")', () => {
  const changeValue = makeMaskApplicator("+55 (99) 9 9999-9999")
  expect(changeValue('03202508679')).toBe('+55 (03) 2 0250-8679')
})

test('makeMaskApplicator("<<999.999,99")', () => {
  const changeValue = makeMaskApplicator("<<999.999,99")
  expect(changeValue('')).toBe('')
  expect(changeValue('11')).toBe('11')
  expect(changeValue('111')).toBe('1,11')
  expect(changeValue('111111')).toBe('1.111,11')
  expect(changeValue('11111111')).toBe('111.111,11')
})

test('makeMaskApplicator(">>999.999,99")', () => {
  const changeValue = makeMaskApplicator(">>999.999,99")
  expect(changeValue('')).toBe('')
  expect(changeValue('11')).toBe('11')
  expect(changeValue('111')).toBe('111')
  expect(changeValue('1111')).toBe('111.1')
  expect(changeValue('111111')).toBe('111.111')
  expect(changeValue('11111111')).toBe('111.111,11')
})

test("makeMaskApplicator(''R$ ;999.999,99)", () => {
  const changeValue = makeMaskApplicator("<<''R$ ;999.999,99")
  expect(changeValue('')).toBe('')
  expect(changeValue('11')).toBe('R$ 11')
  expect(changeValue('111')).toBe('R$ 1,11')
  expect(changeValue('R$ 111')).toBe('R$ 1,11')
})

test("only makeMaskApplicator(''#;999)", () => {
  const changeValue = makeMaskApplicator("''#;999")
  expect(changeValue('')).toBe('')
  expect(changeValue('11')).toBe('#11')
  expect(changeValue('111')).toBe('#111')
  expect(changeValue('#111')).toBe('#111')
})
