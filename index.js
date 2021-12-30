const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
})

app.get('/chatapp', (req, res) => {
    res.sendFile(__dirname + '/chatapp.html');
})


server.listen(process.env.PORT || 5500, () => {
    console.log("App is listening at port 5500")
})