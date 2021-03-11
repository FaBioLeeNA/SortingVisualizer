const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../public`));

const PORT = 3333;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
