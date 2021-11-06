const express = require('express');
const bodyParser = require('body-parser')
const appid = process.env.APPID;

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//   })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
  var jsonPerson = '{"first_name":"billy", "age":23}';
  var personObject = JSON.parse(jsonPerson)
  res.send(personObject);
})


app.get("/", (req, res) => {
        res.send(`appid: ${appid} home page: says helo!`);
});


app.get("/app1", (req, res) => {
    res.send(`appid: ${appid} app1 page: APP1!`);
});

app.get("/app2", (req, res) => {
    res.send(`appid: ${appid} app2 page: APP2!`);
});

app.get("/app3", (req, res) => {
    res.send(`appid: ${appid} app3 page: APP3!`);
});

app.get("/admin", (req, res) => {
    res.send(`appid: ${appid} ADMin page: just for a fe people to access!`);
});


app.listen(appid, () => {
    console.log(`${appid} is Running on Port ${appid}`);
});