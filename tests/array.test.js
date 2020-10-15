import { expect } from 'chai';
import { Array }  from './../src/Array'

describe('Test array manipulations', () => {
    it('Should copy non emplty array of elements', () => {
        const array = [1, 2, 2, 4, 3, 2];
        const result = Array.copy(array);
        expect(result).to.equal([1, 2, 2, 4, 3, 2]);
        expect(result.length).to.equal(array.length);
    });

    it('Should copy an empty array', () => {
        const array = [];
        const result = Array.copy(array);
        expect(result.length).to.equal(0);
    });
});
