// create test files in seperate file, run two different contexts test or run
const assert = require('assert');

const { forEach, map } = require('./index');

const test = (desc, fn) => {
  console.log('---', desc);
  try {
    fn();
  } catch (err) {
    console.log('ERROR:', err.message);
  }
};

it('The forEach function', () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  })
  
  assert.strictEqual(sum, 6, 'Expected summing array to equal 6');

  // use Node.js strick assertion https://nodejs.org/api/assert.html#assert_strict_assertion_mode
  // if (sum !== 6) {
  //   throw new Error('Expected summing array to equal 6');
  // }
});

it('The Map Function', () => {
  const result = map([1, 2, 3], value => {
    return value * 2;
  });
  
  assert.deepStrictEqual(result, [2, 4, 6]);
  // assert.strictEqual(result[1], 4);
  // assert.strictEqual(result[2], 6);

  // if (result[0] !== 2) {
  //   throw new Error(`Expected to find 2, but found ${result[0]}`);
  // }
  // if (result[1] !== 4) {
  //   throw new Error(`Expected to find 4, but found ${result[1]}`);
  // }
  // if (result[2] !== 6) {
  //   throw new Error(`Expected to find 6, but found ${result[2]}`);
  // }
})
