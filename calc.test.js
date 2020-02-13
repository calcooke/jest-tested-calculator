const calc = require('./calc');

describe('Properly adds two numbers', () => {

    //expect(calc.add(1,3)).toBe(4);

    it('Should not add strings', () => {
        expect(calc.add(1, '3')).toBe(null);
    })

});

test('properly subtracts two numbers', () => {
    
    expect(calc.subtract(1, 2)).toBe(-1)
 
 }) 