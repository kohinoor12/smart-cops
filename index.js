const app = require('./app');
const mongoose = require('mongoose');
const incidentmodel = require('./model/incident');
const port = 3000;




app.get('/', (req, res) => {
  res.send("Helloe world")
});
app.get('*', (req, res) => {
  res.status(404).send('Not nahi Found');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`SErver lsitening on Port http://localhost:${port}`);
})
