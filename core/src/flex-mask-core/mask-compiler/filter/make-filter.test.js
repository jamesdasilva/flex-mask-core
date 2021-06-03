import makeFilter from './make-filter'
import { regExTokens, escapeChars } from '../../helpers/utils'

describe('makeFilter fn', () => {

  describe('[{}] => new RegExp', () => {

    test('Date 99/99/9999', () => {

      const filter = makeFilter([
        { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
        { token: '/', start: 2, end: 3, keyChar: false, regEx: escapeChars['/'] },
        { token: '99', start: 3, end: 5, keyChar: true, regEx: regExTokens['9'] },
        { token: '/', start: 5, end: 6, keyChar: false, regEx: escapeChars['/'] },
        { token: '9999', start: 6, end: 10, keyChar: true, regEx: regExTokens['9'] }
      ])

      expect(filter).toEqual(new RegExp(/^[0-9]{0,2}$|^[0-9]{2}\/[0-9]{0,2}$|^[0-9]{2}\/[0-9]{2}\/[0-9]{0,4}$/))

      expect(filter.test('')).toBe(true)
      expect(filter.test('2')).toBe(true)
      expect(filter.test('22')).toBe(true)
      expect(filter.test('22/')).toBe(true)
      expect(filter.test('22/2')).toBe(true)
      expect(filter.test('22/222')).toBe(false)
      expect(filter.test('22/22/2')).toBe(true)
      expect(filter.test('22/22/2222')).toBe(true)
      expect(filter.test('22/22/22222')).toBe(false)
    })

    test('CPF 999.999.999-99', () => {

      const filter = makeFilter([
        { token: '999', start: 0, end: 3, keyChar: true, regEx: regExTokens['9'] },
        { token: '.', start: 3, end: 4, keyChar: false, regEx: escapeChars['.'] },
        { token: '999', start: 4, end: 7, keyChar: true, regEx: regExTokens['9'] },
        { token: '.', start: 7, end: 8, keyChar: false, regEx: escapeChars['.'] },
        { token: '999', start: 8, end: 11, keyChar: true, regEx: regExTokens['9'] },
        { token: '-', start: 11, end: 12, keyChar: false, regEx: escapeChars['-'] },
        { token: '99', start: 12, end: 14, keyChar: true, regEx: regExTokens['9'] },
      ])

      expect(filter).toEqual(new RegExp(/^[0-9]{0,3}$|^[0-9]{3}\.[0-9]{0,3}$|^[0-9]{3}\.[0-9]{3}\.[0-9]{0,3}$|^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{0,2}$/))
      
      expect(filter.test('')).toBe(true)
      expect(filter.test('9')).toBe(true)
      expect(filter.test('999')).toBe(true)
      expect(filter.test('9999')).toBe(false)
      expect(filter.test('999.9')).toBe(true)
      expect(filter.test('999.999')).toBe(true)
      expect(filter.test('999.9999')).toBe(false)
      expect(filter.test('999.999.')).toBe(true)
      expect(filter.test('999.999.9')).toBe(true)
      expect(filter.test('999.999.999-9')).toBe(true)
      expect(filter.test('999.999.999-99')).toBe(true)
      expect(filter.test('999.999.999-999')).toBe(false)
    })

    test('Custom 99***99-AAA', () => {

      const filter = makeFilter([
        { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
        { token: '***', start: 2, end: 5, keyChar: true, regEx: regExTokens['*'] },
        { token: '99', start: 5, end: 7, keyChar: true, regEx: regExTokens['9'] },
        { token: '-', start: 7, end: 8, keyChar: false, regEx: escapeChars['-'] },
        { token: 'AAA', start: 8, end: 11, keyChar: true, regEx: regExTokens['A'] }
      ])

      expect(filter.test('12éeã')).toBe(true)
      expect(filter.test('12éeãé')).toBe(false)
      expect(filter.test('12ééé47-aas')).toBe(true)
      expect(filter.test('12ééé47-aasa')).toBe(false)
    })

    test('Only numeric strings with a maximum of 6 characters 999999', () => {

      const filter = makeFilter([
        { token: '999999', start: 0, end: 6, keyChar: true, regEx: regExTokens['9'] },
      ])

      expect(filter).toEqual(new RegExp(/^[0-9]{0,6}$/))
      expect(filter.test('')).toBe(true)
      expect(filter.test('1')).toBe(true)
      expect(filter.test('12')).toBe(true)
      expect(filter.test('123888')).toBe(true)
      expect(filter.test('1238883')).toBe(false)
    })
  })
})