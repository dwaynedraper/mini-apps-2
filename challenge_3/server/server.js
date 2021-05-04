//* requires
const express = require('express');

//* app
const app = express();
app.use(express.static('public'))
app.use(express.json());

const port = process.env.PORT || 3000;

//* Routes


app.listen(port, () => {
  console.log(`Bowling Score calculator running on port ${port}`)
})