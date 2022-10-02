const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');
const app = express();

// every route handler form gets body parsed
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys:['lkja555xzdsjal542sdfa']
}));

// route handler
//req = request, res = response
app.get('/', (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="pwConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});


// middleware functions are always called with 3 arguements
// below is custom rolled
// const bodyParser = (req, res, next) => {
//   if (req.method === 'POST') {
//     // get access to email, pw, pw confirm
//     req.on('data', data => {
//       const parsed = data.toString('utf8').split('&');
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split('=');
//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//       console.log(formData);
//     });
//   }
// }

app.post('/', async (req, res) => {
  console.log(req.body);
  // destructure form data
  const { email, password, pwConfirmation } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send('Email is already registered.')
  }

  if (password !== pwConfirmation) {
    return res.send('Passwords must match.')
  }

  // Create a user in our repo to represent this person
  const user = await usersRepo.create({ email, password });
  // Store the id of that user inside of users cookie
  req.session === {} // Added by cookie session!
  res.send('Account Created');
  // persistent data
});

// listen for incoming traffic on a port i.e. 3000
app.listen(3000, () => {
  console.log('Listening');
});