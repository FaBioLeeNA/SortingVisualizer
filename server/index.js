const express = require('express');

const app = express();

app.use(express.static('/Users/fabianyee/Desktop/Sorting Visualizer/public'));

const PORT = 8585;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
