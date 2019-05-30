let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/pomodoro.html'));

app.listen(process.env.PORT, () =>
  console.log(`server connected on port: ${process.env.PORT}`)
);
