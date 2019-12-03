const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ok')
});

app.get('/data', (req, res) => {
  res.json({payload: 'this'})
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
