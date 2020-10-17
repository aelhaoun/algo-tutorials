import { expect } from 'chai';

import { sumArray, countEven } from '../src/index';

describe('Test sum values of an array', () => {
    it('Test sumArray with positif number', () => {
        expect(sumArray([3, 0, 4, 2])).to.equal(9);
    });

    it('Test sumArray with negatif numbers', () => {
        expect(sumArray([-3, -4, 0, -1])).to.equal(-8);
    });

    it('Test sumArray, Emplty array', () => {
        expect(sumArray([])).to.equal(0);
    });

    it('Test sumArray, positf and negatif number', () => {
        expect(sumArray([-3, 4])).to.equal(1);
    });

    it('Test sumArray, 0 and positif number', () => {
        expect(sumArray([0, 4])).to.equal(4);
    });

    it('Test sumArray, 0 and negatif number', () => {
        expect(sumArray([0, -4])).to.equal(-4);
    });
});

describe('Test count even in Array', () => {
    it('Test countEven rando elemelments', () => {
        expect(countEven([3, 0, 4, 2])).to.equal(3);
    });

    it('Test countEven only even numbers', () => {
        expect(countEven([8, 2, 4, 2])).to.equal(4);
    });

    it('Test countEven, Emplty array', () => {
        expect(countEven([])).to.equal(0);
    });
});

