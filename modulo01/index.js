const express = require('express');

const server = express();
server.use(express.json());

const users = ['Diego', 'Robson', 'Victor']

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd('Request');
});

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put('/users/:index', (req, res) => {
  const { name } = req.body;
  const { index } = req.params;
  users[index] = name;
  return res.json(users);
})

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
})

server.listen(3000);