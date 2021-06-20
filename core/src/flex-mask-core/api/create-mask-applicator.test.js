import createMaskApplicator from './create-mask-applicator'

test('createMaskApplicator("999/9")', () => {
  const changeValue = createMaskApplicator('999/9')
  expect(changeValue('8888').value).toBe('888/8')
})

test('Date format - createMaskApplicator("99/99/9999")', () => {
  const changeValue = createMaskApplicator('99/99/9999')
  expect(changeValue('03202508').value).toBe('03/20/2508')
})

test('CPF format - createMaskApplicator("999.999.999-99")', () => {
  const changeValue = createMaskApplicator('999.999.999-99')
  expect(changeValue('03202508679').value).toBe('032.025.086-79')
})

test('CNPJ format - createMaskApplicator("99.999.999/9999-99")', () => {
  const changeValue = createMaskApplicator('99.999.999/9999-99')
  expect(changeValue('03202508679976').value).toBe('03.202.508/6799-76')
})

test('Credit card format - createMaskApplicator("9999-9999-9999-9999")', () => {
  const changeValue = createMaskApplicator("9999-9999-9999-9999")
  expect(changeValue('0320250867998765').value).toBe('0320-2508-6799-8765')
})

test('Credit card format - createMaskApplicator("^4>9;-9999-9999-9999")', () => {
  const changeValue = createMaskApplicator("^4>9;-9999-9999-9999")
  expect(changeValue('0320250867998765').value).toBe('0320-2508-6799-8765')
})

test('Credit card format - createMaskApplicator("^4>9;-^4>9;-^4>9;-^4>9;")', () => {
  const changeValue = createMaskApplicator("^4>9;-^4>9;-^4>9;-^4>9;")
  expect(changeValue('0320250867998765').value).toBe('0320-2508-6799-8765')
})

test('Home phone format - createMaskApplicator("(99) 9999-9999")', () => {
  const changeValue = createMaskApplicator("(99) 9999-9999")
  expect(changeValue('0302508679').value).toBe('(03) 0250-8679')
})

test('Cell phone format - createMaskApplicator("(99) 9 9999-9999")', () => {
  const changeValue = createMaskApplicator("(99) 9 9999-9999")
  expect(changeValue('03202508679').value).toBe('(03) 2 0250-8679')
  expect(changeValue('(03) 2 0250-8679').value).toBe('(03) 2 0250-8679')
})

test('International phone format - createMaskApplicator("+55 (99) 9 9999-9999")', () => {
  const changeValue = createMaskApplicator("+55 (99) 9 9999-9999")
  expect(changeValue('03202508679').value).toBe('+55 (03) 2 0250-8679')
})

test('createMaskApplicator("<<999.999,99")', () => {
  const changeValue = createMaskApplicator("<<999.999,99")
  expect(changeValue('').value).toBe('')
  expect(changeValue('11').value).toBe('11')
  expect(changeValue('111').value).toBe('1,11')
  expect(changeValue('111111').value).toBe('1.111,11')
  expect(changeValue('11111111').value).toBe('111.111,11')
  expect(changeValue('111.111,11').value).toBe('111.111,11')
  expect(changeValue('111111.111,11').value).toBe('111.111,11')
})

test('onlytest createMaskApplicator(">>999.999,99")', () => {
  const changeValue = createMaskApplicator(">>999.999,99")
  // expect(changeValue('').value).toBe('')
  // expect(changeValue('11').value).toBe('11')
  // expect(changeValue('111').value).toBe('111')
  // expect(changeValue('1111').value).toBe('111.1')
  // expect(changeValue('111111').value).toBe('111.111')
  // expect(changeValue('11111111').value).toBe('111.111,11')
  expect(changeValue('111111111').value).toBe('111.111,11')
})

test("createMaskApplicator(''R$ ;999.999,99)", () => {
  const changeValue = createMaskApplicator("''R$ ;<<999.999,99")
  expect(changeValue('').value).toBe('')
  expect(changeValue('11').value).toBe('R$ 11')
  expect(changeValue('111').value).toBe('R$ 1,11')
  expect(changeValue('R$ 111').value).toBe('R$ 1,11')
  expect(changeValue('R$ 1,11').value).toBe('R$ 1,11')
})

test("createMaskApplicator(''#;999)", () => {
  const changeValue = createMaskApplicator("''#;999")
  expect(changeValue('').value).toBe('')
  expect(changeValue('11').value).toBe('#11')
  expect(changeValue('111').value).toBe('#111')
  expect(changeValue('#111').value).toBe('#111')
})
