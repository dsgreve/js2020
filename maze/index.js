const {
  Engine,
  Render,
  Runner,
  World,
  Bodies,
} = Matter;

const cells = 10;
const width = 600;
const height = 600;

const unitLength = width / cells;

const engine = Engine.create();

const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width: width,
    height: height
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
World.add(world, walls)

// Maze Generation



// using nested for loop
// const grid = [];
// for (let i = 0; i < 3; i++) {
//   grid.push([]);
//   for (let j = 0; j < 3; j++) {
//     grid[i].push(true);
//   }
// }

// maze generation

const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

const grid = Array(cells)
  .fill(true)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);


const stepThroughCell = (row, column) => {
  // If i have visited a cel, then return
  if (grid[row][column]) {
    return;
  }

  // mark cell as visited
  grid[row][column] = true;
  // assemble radomly-ordered neighbor
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, 'right'],
    [row + 1, column, 'down'],
    [row, column - 1, 'left']
  ]);

  // For each neighbor
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // see if neighbor is out of bounds
    if (nextRow < 0 || nextRow >= cells || nextColumn < 0 || nextColumn >= cells) {
      continue;
    }

    // If we visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }

    // Remove a wall from either horizontals or verticals
    if (direction === 'left') {
      verticals[row][column - 1] = true;
    } else if (direction === 'right') {
      verticals[row][column] = true;
    } else if (direction === 'up') {
      horizontals[row - 1][column] = true;
    } else if (direction === 'down') {
      horizontals[row][column] = true;
    }

    stepThroughCell(nextRow, nextColumn);
  }
  // visit that next cell
};

stepThroughCell(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open === true) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength / 2,
      rowIndex * unitLength + unitLength,
      unitLength,
      10,
      {
        isStatic: true
      }
    );

    World.add(world, wall);
  })
})

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength,
      rowIndex * unitLength + unitLength / 2,
      10,
      unitLength,
      {
        isStatic: true
      }
    );
    World.add(world, wall);
  });
});

const goal = Bodies.rectangle(
  width - unitLength / 2,
  height - unitLength / 2,
  unitLength * .7,
  unitLength * .7,
  {
    isStatic: true,
  }
);
World.add(world, goal);

const ball = Bodies.circle(
  unitLength / 2,
  unitLength / 2,
  unitLength / 4
);
World.add(world, ball);

document.addEventListener('keydown', event => {
  if (event.keyCode === 87) {
    console.log('move ball up');
  }
  if (event.keyCode === 68) {
    console.log('move ball right');
  }
  if (event.keyCode === 83) {
    console.log('move ball down');
  }
  if (event.keyCode === 65) {
    console.log('move ball left');
  }

})