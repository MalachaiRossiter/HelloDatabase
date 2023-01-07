const express = require('express');
const app = express();
const port = 8000;

require('./routes/person.routes')(app);

app.listen(port, () => console.log(`listening on port: ${port}`));