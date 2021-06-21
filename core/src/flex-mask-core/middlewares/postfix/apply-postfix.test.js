import applyPostfix from './apply-postfix'

test('applyPostfix(",99", "999")', () => {
  const context = {
    postfix: ',99',
    value: '999'
  }
  applyPostfix(context)
  expect(context.value).toBe('999,99')
})

test('applyPostfix("#", "999")', () => {
  const context = {
    postfix: '#',
    value: '999'
  }
  applyPostfix(context)
  expect(context.value).toBe('999#')
})
  