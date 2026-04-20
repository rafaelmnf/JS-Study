import { formatCurrency } from "../../js/utils/util.js";

// Test Suit
// 'describe' and 'it' are functions of Jasmine
describe('test suite: formatCurrency', () => {
    it('converts cents int dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');     
    })

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    })

    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
}) // Function name test --> what test does --> real test

    