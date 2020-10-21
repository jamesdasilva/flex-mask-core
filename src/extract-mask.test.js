import extractMask from './extract-mask'

test('extractMask()', () => {
  expect(extractMask('99-9')).toEqual([
    { maskChar: '-', index: 2 },
  ])
  expect(extractMask('999.999.999-99')).toEqual([
    { maskChar: '.', index: 3 },
    { maskChar: '.', index: 7 },
    { maskChar: '-', index: 11 },
  ])
  expect(extractMask('99/99/9999')).toEqual([
    { maskChar: '/', index: 2 },
    { maskChar: '/', index: 5 },
  ])
  expect(extractMask('99//99/9999')).toEqual([
    { maskChar: '/', index: 2 },
    { maskChar: '/', index: 3 },
    { maskChar: '/', index: 6 },
  ])
  expect(extractMask('99é9+')).toEqual([
    { maskChar: 'é', index: 2 },
    { maskChar: '+', index: 4 },
  ])
})