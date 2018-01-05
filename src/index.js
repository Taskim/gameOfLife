const gol = require('./bloob');

let grid = [];
const size = 25;

for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
        grid[i][j] = Math.random() < 0.6;
    }
}

console.clear();

setInterval(() => {
    const newGrid = [];

    for (let i = 0; i < size; i++) {
        newGrid[i] = [];
        for (let j = 0; j < size; j++) {
            const neighbours = gol.getNeighbours(grid, i, j);
            const aliveNeighbours = gol.countAliveNeighbours(neighbours);
            newGrid[i][j] = gol.shouldThisCellBeAlive(grid[i][j], aliveNeighbours);
        }
    }

    grid = newGrid;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (grid[i][j]) {
                process.stdout.write(' 🐥 ');
            } else {
                process.stdout.write(' ⚫️ ');
            }
        }
        console.log('');
    }
    setTimeout(() => { console.clear(); }, 100);
}, 100);
