import calc from '../js/utils/PriceCalculator'

test('calc 1000, 2000, white, plastic', () => {
    expect(calc(1000, 2000, 'white', 'plastic')).toBe(375);
});