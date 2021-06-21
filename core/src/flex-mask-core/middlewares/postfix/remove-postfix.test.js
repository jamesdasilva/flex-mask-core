import removePostfix from './remove-Postfix'

describe('removePostfix fn Spec', () => {

  test('removePostfix("111RR", "RR") === "111"', () => {
    const context = {
      value: "111RR",
      postfix: 'RR'
    }
    removePostfix(context)
    expect(context).toEqual({
      value: "111",
      postfix: 'RR'
    })
  })

  test('removePostfix("111#", "#") === "111"', () => {
    const context = {
      value: "111#",
      postfix: '#'
    }
    removePostfix(context)
    expect(context).toEqual({
      value: "111",
      postfix: '#'
    })
  })

  test('removePostfix("111", "#") === "111"', () => {
    const context = {
      value: "111",
      postfix: '#'
    }
    removePostfix(context)
    expect(context).toEqual({
      value: "111",
      postfix: '#'
    })
  })

  test('removePostfix("111", "") === "111"', () => {
    const context = {
      value: "111",
      postfix: ''
    }
    removePostfix(context)
    expect(context).toEqual({
      value: "111",
      postfix: ''
    })
  })

  test('removePostfix("", "") === ""', () => {
    const context = {
      value: '',
      postfix: ''
    }
    removePostfix(context)
    expect(context).toEqual({
      value: '',
      postfix: ''
    })
  })
})