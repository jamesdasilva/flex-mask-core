import removeMask from './remove-mask'

test('removeMask(999.999.999-99)', () => {
  expect(removeMask('999.999.999-99')).toBe('99999999999')
})

test('removeMask(99/99/9999)', () => {
  expect(removeMask('99/99/9999')).toBe('99999999')
})

test('removeMask(ABC 9999)', () => {
  expect(removeMask('ABC 9999')).toBe('ABC9999')
})

test('removeMask((11) 98766-1234)', () => {
  expect(removeMask('(11) 98766-1234')).toBe('11987661234')
})

test('removeMask(1.000.000.000,00)', () => {
  expect(removeMask('1.000.000.000,00')).toBe('100000000000')
})
