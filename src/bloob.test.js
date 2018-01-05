/* eslint-env jest */

var GOL = require('./bloob');

describe('shouldThisCellBeAlive', () => {
    it('should return the cell stauts if this cell has 2 neighbours', () => {
        expect(GOL.shouldThisCellBeAlive(true, 2)).toBe(true);
    });
    it('should become alive if this cell is dead and has 3 neighbours', () => {
        expect(GOL.shouldThisCellBeAlive(false, 3)).toBe(true);
    });
    it('should become/stay dead if this cell has strictly less than 2 neighbours', () => {
        expect(GOL.shouldThisCellBeAlive(true, 1)).toBe(false);
    });
});


describe('countAliveNeighbours', () => {
    it('should get the number of alive neighbours', () => {
        const neighbours = [true, false, true, false, false, true, false, true];
        expect(GOL.countAliveNeighbours(neighbours)).toBe(4);
    });
});

describe('isAlive', () => {
    it('should return the state of the given cell coordinates', () => {
        const grid = [
            [true, false, true],
            [true, false, true],
            [true, false, true],
        ];
        expect(GOL.isAlive(grid, 0, 0)).toEqual(true);
    })

    it('should return undefined if coordinates dont exist', () => {
        const grid = [
            [true, false, true],
            [true, false, true],
            [true, false, true],
        ];
        expect(GOL.isAlive(grid, 4, 4)).toEqual(undefined);
    })
})