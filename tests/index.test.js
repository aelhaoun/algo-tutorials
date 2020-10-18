import { expect } from 'chai';
import { findMax, reverseArray } from '../src/index'

describe('Test fin Max in array', () => {
    it('Test with positif positif number', () => {
        expect(findMax([3, 0, 4, 2, 6, 1])).to.equal(6);
    });

    it('Test with negatif positif number', () => {
        expect(findMax([-3, -4, 0, -2, -6, -1])).to.equal(-1);
    });
});

describe('Test reverse array', () => {
    it('Test reverse array with elements', () => {
        expect(reverseArray([3, 0, 4, 2, 6, 1])).to.equal([1, 0, 4, 2, 6, 1]);
    });

    it('Test reverse empty array', () => {
        expect(reverseArray([])).to.equal([]);
    });
});

describe('Test filter even number in array', () => {
    it('Test filter even numbers in array with elements', () => {
        expect(reverseArray([3, 0, 4, 2, 6, 1])).to.equal([1, 0, 4, 2, 6, 1]);
    });

    it('Test filter even numbers in empty array', () => {
        expect(reverseArray([])).to.equal([]);
    });
});
