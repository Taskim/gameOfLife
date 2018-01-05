
function countAliveNeighbours(neighbours) {
    return neighbours.filter(x => x === true).length;
}


function isAlive(grid, x, y) {
    if (x < 0 || x > grid.length - 1 || y < 0 || y > grid.length - 1) {
        return undefined;
    }

    return grid[x][y];
}


function shouldThisCellBeAlive(cellStatus, aliveNeighbours) {
    if (aliveNeighbours === 2) {
        return cellStatus;
    } 
    if (aliveNeighbours === 3) {
        return true;
    }
    return false;
}

function getNeighbours(grid, x, y) {
    const neighbours = [];
    neighbours.push(isAlive(grid, x - 1, y - 1));
    neighbours.push(isAlive(grid, x - 1, y));
    neighbours.push(isAlive(grid, x - 1, y + 1));
    neighbours.push(isAlive(grid, x, y - 1));
    neighbours.push(isAlive(grid, x, y + 1));
    neighbours.push(isAlive(grid, x + 1, y - 1));
    neighbours.push(isAlive(grid, x + 1, y));
    neighbours.push(isAlive(grid, x + 1, y + 1));
    return neighbours;
}

module.exports = {
    shouldThisCellBeAlive,
    countAliveNeighbours,
    isAlive,
    getNeighbours,
};