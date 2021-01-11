import applyPrefix from './apply-prefix'

test('applyPrefix("R$ ", "999,99")', () => {
  const context = {
    prefix: 'R$ ',
    value: '999,99'
  }
  applyPrefix(context)
  expect(context.value).toBe('R$ 999,99')
})

test('applyPrefix("#", "999")', () => {
  const context = {
    prefix: '#',
    value: '999'
  }
  applyPrefix(context)
  expect(context.value).toBe('#999')
})
  