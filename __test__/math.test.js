const add = require('../src/math');
describe('math add', () => {
    test('return a sum of two numbers', () => {
        expect(add(2, 2)).toBe(4);
    });
});