const express = require('express');

const app = express();

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
const bodyParser = (req, res, next) => {
  if (req.method === 'POST') {
    // get access to email, pw, pw confirm
    req.on('data', data => {
      const parsed = data.toString('utf8').split('&');
      const formData = {};
      for (let pair of parsed) {
        const [key, value] = pair.split('=');
        formData[key] = value;
      }
      req.body = formData;
      next();
      console.log(formData);
    });
  }
}

app.post('/', bodyParser, (req, res) => {
  console.log(req.body);
  res.send('Account Created');
});

// listen for incoming traffic on a port i.e. 3000
app.listen(3000, () => {
  console.log('Listening');
});