const express = require('express');
const app = express();

app.get('/', (_, res) => res.send('Hello World v2!'));
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});

