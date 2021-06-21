import Postfix from './postfix'
import removePostfix from './remove-postfix'
import applyPostfix from './apply-postfix'

const createContext = () => ({
  beforeExec: [],
  afterExec: []
})

let context

beforeEach(() => {
  context = createContext()
});

describe('Postfix(context) => context - Pipe Spec', () => {

  test("{ stringMask: :],99;999 } => { postfix: ',99', stringMask: '999', beforeExec: [ fn ], afterExec: [ fn ] }", () => {

    context.stringMask = ":],99;999"

    Postfix(context)

    expect(context).toEqual({
      postfix: ",99",
      stringMask: "999",
      beforeExec: [ removePostfix ],
      afterExec: [ applyPostfix ]
    })
  })

  test("{ stringMask: :] #;^5>9; } => { postfix: ' #', stringMask: '^5>9;', beforeExec: [ fn ], afterExec: [ fn ] }", () => {

    context.stringMask = ":] #;^5>9;"

    Postfix(context)

    expect(context).toEqual({
      postfix: " #",
      stringMask: "^5>9;",
      beforeExec: [ removePostfix ],
      afterExec: [ applyPostfix ]
    })
  })

  test("{ stringMask: :]POSTFIX;^3>9;.^3>9;.^3>9;-^2>9; } => { postfix: 'POSTFIX', stringMask: ^3>9;.^3>9;.^3>9;-^2>9;, beforeExec: [ fn ], afterExec: [ fn ] }", () => {

    context.stringMask = ":]POSTFIX;^3>9;.^3>9;.^3>9;-^2>9;"

    Postfix(context)

    expect(context).toEqual({
      postfix: "POSTFIX",
      stringMask: "^3>9;.^3>9;.^3>9;-^2>9;",
      beforeExec: [ removePostfix ],
      afterExec: [ applyPostfix ]
    })
  })
})