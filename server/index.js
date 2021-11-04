
const express = require ('express');
const app = express();
const mysql = require('mysql2'); 
const cors = require('cors');


app.use(cors());
app.use(express.json());




const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Sdewqazxc111",
  database: "formsubmitdb",
});

app.post("/create", (req, res) => {
  const fname = req.body.fname;
  const lName = req.body.lName;
  const email = req.body.email;
  const phone = req.body.phone;
  const skills = req.body.skills;
  const status = req.body.status;
  const availability = req.body.availability;
  

   db.query(
    "INSERT INTO  formsubmittable (fname, lName, email, phone, skills, status, availability) VALUES (?,?,?,?,?,?,?)",
    [fname, lName, email, phone, skills, status, availability],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/students", (req, res) => {
    db.query("SELECT * FROM formsubmittable ", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.use('/login', (req, res) => {
    res.send({
      token: 'a'
    });
  });
  
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })


  app.post('/', function (req, res) {
    res.send('Hello World!');
  });


  var port = process.env.PORT || 5000;

  app.listen(port);