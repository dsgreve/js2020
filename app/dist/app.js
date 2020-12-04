// Promises A promise is a object representing the eventual completion or failure of an asynchronous operation -- avoid 'callback hell'

//const { reject } = require("lodash");

// const willGetADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// willGetADog.then(() => {
//     console.log("We got a dog");
//   }).catch(() => {
//     console.log("No Dog for you");
// });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const pages = {
          '/users': [
            {id: 1, username: 'Bilbo'},
            {id: 5, username: 'Esmerelda'}
          ],
          '/users/1': {
            id: 1,
            username: 'Bilbo',
            upvotes: 360,
            city: 'Lisbon',
            topPostId: 454321
          },
          '/users/5': {
            id: 5,
            username: 'Esmerelda',
            upvotes: 571,
            city: 'Honolulu'
          },
          '/posts/454321' :  {
            id: 454321,
            title : 'Ladies and Gentlman I introduce you to Hamlet!'
          },
          '/about': 'This is the about page!'
        }

        const data = pages[url];
        if (data) {
          resolve({status: 200, data});
        }
        else {
          reject({status: 404})
        }
    },
    1000)
  });
};


// this can be too messy see better below
// fakeRequest('/users').then((res) => {
//   const id = res.data[0].id;
//   console.log(res.data[0].id)
//   fakeRequest(`/users/${id}`).then((res) => {
//     console.log(res)
//     const post = res.data.topPostId;
//     fakeRequest(`/posts/${post}`).then((res) => {
//       console.log(res.data.title)
//     })
//   });
// }).catch((err) => {
//   console.log('oh No', err)
// })


// You can chain promises and not nest them
fakeRequest('/users')
.then((res) => {
  console.log(res)
  const id = res.data[0].id;
  return fakeRequest(`/users/${id}`)
})
.then((res) => {
  console.log(res)
  const postID = res.data.topPostId;
  return fakeRequest(`/posts/${postID}`);
})
.then((res) => {
  console.log(res.data.title)
})
.catch((err) => {
  console.log('oh No', err)
})





// .catch((res) => {
//   console.log(res.status)
//   console.log('REQUEST FAILED')
// })
// fakeRequest('/contact')
// .then((res) => {
//   console.log('Status Code', res.status);
//   console.log('Data', res.data);
//   console.log('REQUEST WORKED')
// })
// .catch((res) => {
//   console.log(res.status)
//   console.log('REQUEST FAILED')
// })