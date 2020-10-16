import { expect } from 'chai';
import { sum } from '../src/index'

describe('Test function sum', () => {
    it('Test adding two positif number', () => {
        expect(sum(3, 4)).to.equal(7);
    });

    it('Test adding two negatif number', () => {
        expect(sum(-3, -4)).to.equal(-7);
    });

    it('Test adding two 0 number', () => {
        expect(sum(0, 0)).to.equal(0);
    });

    it('Test adding positf and negatif number', () => {
        expect(sum(-3, 4)).to.equal(1);
    });

    it('Test adding 0 and positif number', () => {
        expect(sum(0, 4)).to.equal(4);
    });

    it('Test adding 0 and negatif number', () => {
        expect(sum(0, -4)).to.equal(-4);
    });
});
