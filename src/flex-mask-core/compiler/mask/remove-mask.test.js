import removeMask from './remove-mask'

test('removeMask(999.999.999-99)', () => {
  const context = {
    value: '999.999.999-99'
  }
  removeMask(context)
  expect(context).toEqual({
    value: '99999999999'
  })
})

test('removeMask(99/99/9999)', () => {
  const context = {
    value: '99/99/9999'
  }
  removeMask(context)
  expect(context).toEqual({
    value: '99999999'
  })
})

test('removeMask(ABC 9999)', () => {
  const context = {
    value: 'ABC 9999'
  }
  removeMask(context)
  expect(context).toEqual({
    value: 'ABC9999'
  })
})

test('removeMask((11) 98766-1234)', () => {
  const context = {
    value: '(11) 98766-1234'
  }
  removeMask(context)
  expect(context).toEqual({
    value: '11987661234'
  })
})

test('removeMask(1.000.000.000,00)', () => {
  const context = {
    value: '1.000.000.000,00'
  }
  removeMask(context)
  expect(context).toEqual({
    value: '100000000000'
  })
})
