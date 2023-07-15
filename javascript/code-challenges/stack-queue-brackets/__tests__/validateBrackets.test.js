const validateBrackets = require('../validateBrackets')

describe('validate Brackets function testing', () => {
    test('return false when brackets are not balanced', () => {
        expect(validateBrackets('[({}]')).toBeFalsy()
        expect(validateBrackets('(](')).toBeFalsy()
        expect(validateBrackets('{(})')).toBeFalsy()
        expect(validateBrackets(')')).toBeFalsy()
    }),
    test('return true when brackets are balanced', () => {
        expect(validateBrackets('{}')).toBeTruthy()
        expect(validateBrackets('{}(){}')).toBeTruthy()
        expect(validateBrackets('()[[Extra Characters]]')).toBeTruthy()
        expect(validateBrackets('(){}[[]]')).toBeTruthy()
        expect(validateBrackets('{}{Code}[Fellows](())')).toBeTruthy()
    })
})