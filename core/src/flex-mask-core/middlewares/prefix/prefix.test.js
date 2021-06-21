import Prefix from './prefix'
import removePrefix from './remove-prefix'
import applyPrefix from './apply-prefix'

const createContext = () => ({
  beforeExec: [],
  afterExec: []
})

let context

beforeEach(() => {
  context = createContext()
});

describe('Prefix(context) => context - Pipe Spec', () => {

  test("{ stringMask: :[R$ ;999,99 } => { prefix: 'R$ ', stringMask: '999,99', beforeExec: [ fn ], afterExec: [ fn ] }", () => {

    context.stringMask = ":[R$ ;999,99"

    Prefix(context)

    expect(context).toEqual({
      prefix: "R$ ",
      stringMask: "999,99",
      beforeExec: [ removePrefix ],
      afterExec: [ applyPrefix ]
    })
  })

  test("{ stringMask: :[# ;^5>9; } => { prefix: '# ', stringMask: '^5>9;', beforeExec: [ fn ], afterExec: [ fn ] }", () => {

    context.stringMask = ":[# ;^5>9;"

    Prefix(context)

    expect(context).toEqual({
      prefix: "# ",
      stringMask: "^5>9;",
      beforeExec: [ removePrefix ],
      afterExec: [ applyPrefix ]
    })
  })

  test("{ stringMask: :[R$ ;^3>9;.^3>9;.^3>9;-^2>9; } => { prefix: '#CPF ', stringMask: ^3>9;.^3>9;.^3>9;-^2>9;, beforeExec: [ fn ], afterExec: [ fn ] }", () => {

    context.stringMask = ":[#CPF ;^3>9;.^3>9;.^3>9;-^2>9;"

    Prefix(context)

    expect(context).toEqual({
      prefix: "#CPF ",
      stringMask: "^3>9;.^3>9;.^3>9;-^2>9;",
      beforeExec: [ removePrefix ],
      afterExec: [ applyPrefix ]
    })
  })
})