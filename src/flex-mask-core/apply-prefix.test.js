import applyPrefix from './apply-prefix'

test('applyPrefix("R$ ", "999,99")', () => {
  expect(applyPrefix('R$ ', '999,99')).toBe('R$ 999,99')
})

test('applyPrefix("#", "999")', () => {
  expect(applyPrefix('#', '999')).toBe('#999')
})
  