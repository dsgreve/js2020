const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundry = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundry) {
        reject({bodyBoundry, elRight, amount});
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};


moveX(btn, 150, 500)
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => moveX(btn, 150, 500))
  .then(() => {
    console.log('Done with All moves')
  })
  .catch(({bodyBoundry, amount, elRight}) => {
    console.log(`Body is ${bodyBoundry}px wide`);
    console.log(`Element is at  ${elRight}px,  ${amount}px is too large!`);
  })