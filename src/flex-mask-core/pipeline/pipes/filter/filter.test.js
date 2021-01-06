import Filter from './filter'
import { regExTokens, escapeChars } from '../../../utils'

describe('Filter: creates a filter (regexp) in the context to prevent updating invalid values', () => {

  describe('context { tokens: [{}] } => context { tokens: [{}], filter: new RegExp }', () => {

    test('Date 99/99/9999', () => {

      const context = {
        tokens: [
          { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
          { token: '/', start: 2, end: 3, keyChar: false, regEx: escapeChars['/'] },
          { token: '99', start: 3, end: 5, keyChar: true, regEx: regExTokens['9'] },
          { token: '/', start: 5, end: 6, keyChar: false, regEx: escapeChars['/'] },
          { token: '9999', start: 6, end: 10, keyChar: true, regEx: regExTokens['9'] }
        ],
        rearHooks: []
      }

      Filter(context)

      expect(context.filter).toEqual(new RegExp(/^[0-9]{0,2}$|^[0-9]{2}\/[0-9]{0,2}$|^[0-9]{2}\/[0-9]{2}\/[0-9]{0,4}$/))
    })

    test('CPF 999.999.999-99', () => {

      const context = {
        tokens: [
          { token: '999', start: 0, end: 3, keyChar: true, regEx: regExTokens['9'] },
          { token: '.', start: 3, end: 4, keyChar: false, regEx: escapeChars['.'] },
          { token: '999', start: 4, end: 7, keyChar: true, regEx: regExTokens['9'] },
          { token: '.', start: 7, end: 8, keyChar: false, regEx: escapeChars['.'] },
          { token: '999', start: 8, end: 11, keyChar: true, regEx: regExTokens['9'] },
          { token: '-', start: 11, end: 12, keyChar: false, regEx: escapeChars['-'] },
          { token: '99', start: 12, end: 14, keyChar: true, regEx: regExTokens['9'] },
        ],
        rearHooks: []
      }

      Filter(context)

      expect(context.filter).toEqual(/^[0-9]{0,3}$|^[0-9]{3}\.[0-9]{0,3}$|^[0-9]{3}\.[0-9]{3}\.[0-9]{0,3}$|^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{0,2}$/)
    })

    test('CPF 999.999.999-99', () => {

      const context = {
        tokens: [
          { token: '999', start: 0, end: 3, keyChar: true, regEx: regExTokens['9'] },
          { token: '.', start: 3, end: 4, keyChar: false, regEx: escapeChars['.'] },
          { token: '999', start: 4, end: 7, keyChar: true, regEx: regExTokens['9'] },
          { token: '.', start: 7, end: 8, keyChar: false, regEx: escapeChars['.'] },
          { token: '999', start: 8, end: 11, keyChar: true, regEx: regExTokens['9'] },
          { token: '-', start: 11, end: 12, keyChar: false, regEx: escapeChars['-'] },
          { token: '99', start: 12, end: 14, keyChar: true, regEx: regExTokens['9'] },
        ],
        rearHooks: []
      }

      Filter(context)

      expect(context.filter).toEqual(/^[0-9]{0,3}$|^[0-9]{3}\.[0-9]{0,3}$|^[0-9]{3}\.[0-9]{3}\.[0-9]{0,3}$|^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{0,2}$/)
    })
  })
})
