const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const PORT = 1337;
const postBank = require('./postBank');
const postDetails = require('./postDetails')
const postList = require('./postList')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/posts/:id', (req, res) => {
  const id = req.params.id
  const post = postBank.find(id)
  res.send(postDetails(post))
})

app.get('/', (req, res) => {
  const posts = postBank.list();
  res.send(postList(posts))
});

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
