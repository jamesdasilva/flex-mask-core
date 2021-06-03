import applyMask from './apply-mask'

test('only applyMask()', () => {
  const context = {
    mask: [
      { token: '-', start: 2, end: 3 },
      { token: '+', start: 4, end: 5 },
    ],
    value: '123'
  }
  applyMask(context)
  expect(context.value).toBe('12-3')
})

test('applyMask()', () => {
  const context = {
    mask: [
      { token: '-', start: 2, end: 3 },
      { token: '+(', start: 4, end: 6 },
    ],
    value: '9999'
  } 

  applyMask(context)
  expect(context.value).toBe('99-9+(9')
})

test('applyMask()', () => {
  const context = {
    mask: [
      { token: '$%', start: 0, end: 2 },
      { token: '-', start: 4, end: 5 },
      { token: '+(', start: 6, end: 8 },
      { token: '@#', start: 9, end: 11 },
    ],
    value: '9999'
  } 

  applyMask(context)
  expect(context.value).toBe('$%99-9+(9')
})

test('applyMask(CNPJ)', () => {
  const context = {
    mask: [
      { token: '.', start: 2, end: 3 },
      { token: '.', start: 6, end: 7 },
      { token: '/', start: 10, end: 11 },
      { token: '-', start: 15, end: 18 },
    ],
    value: '99999999999999'
  } 

  applyMask(context)
  expect(context.value).toBe('99.999.999/9999-99')
})

test('applyMask(CNPJ2)', () => {
  const context = {
    mask: [
      { token: '.', start: 2, end: 3 },
      { token: '.', start: 6, end: 7 },
      { token: '/', start: 10, end: 11 },
      { token: '-', start: 15, end: 18 },
    ],
    value: '999999'
  } 

  applyMask(context)
  expect(context.value).toBe('99.999.9')
})

test('applyMask(999.999.999-9)', () => {
  const context = {
    mask: [
      { token: '.', start: 3, end: 4 },
      { token: '.', start: 7, end: 8 },
      { token: '-', start: 11, end: 12 },
    ],
    value: '2222'
  } 
  applyMask(context)
  expect(context.value).toBe('222.2')
  context.value = '222'
  applyMask(context)
  expect(context.value).toBe('222')
  context.value = '222222222'
  applyMask(context)
  expect(context.value).toBe('222.222.222')
  context.value = '2222222222'
  applyMask(context)
  expect(context.value).toBe('222.222.222-2')
})
