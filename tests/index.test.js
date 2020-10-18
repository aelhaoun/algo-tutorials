import { expect } from 'chai';
import { findMax, reverseArray, filterEven } from '../src/index'

describe('Test fin Max in array', () => {
    it('Test with positif positif number', () => {
        expect(findMax([3, 0, 4, 2, 6, 1])).to.equal(6);
    });

    it('Test with negatif positif number', () => {
        expect(findMax([-3, -4, 0, -2, -6, -1])).to.equal(0);
    });
});

describe('Test reverse array', () => {
    it('Test reverse array with elements', () => {
        expect(reverseArray([3, 0, 4, 2, 6, 1])).to.eql([1, 6, 2, 4, 0, 3]);
    });

    it('Test reverse empty array', () => {
        expect(reverseArray([])).to.eql([]);
    });
});

describe('Test filter even number in array', () => {
    it('Test filter even numbers in array with elements', () => {
        expect(filterEven([3, 0, 4, 2, 6, 1])).to.eql([0, 4, 2, 6]);
    });

    it('Test filter even numbers in empty array', () => {
        expect(filterEven([])).to.eql([]);
    });
});
