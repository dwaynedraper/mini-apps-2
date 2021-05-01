//* requires
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const moment = require('moment');

//* app
const app = express();

//* app.use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

//* var declarations
const PORT = process.env.PORT || 3000;
let startDate = moment().subtract(15, 'days').format('YYYY-MM-DD');
let endDate = moment().format('YYYY-MM-DD');

//* routes
app.get('/data', (req, res) => {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
  .then((result) => {
    console.log(result.data);
    res.send(result.data).status(200);
  })
  .catch((err) => {
    console.error(err);
    res.status(500);
  })
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
