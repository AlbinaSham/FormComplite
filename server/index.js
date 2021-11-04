
const express = require ('express');
const app = express();
const mysql = require('mysql2'); 
const cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer')
var upload = multer({dest:'uploads/'});
app.use(bodyParser.urlencoded({extended: true}))
const path = require('path');


app.use(cors());
app.use(express.json());




const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Sdewqazxc111",
  database: "formsubmitdb",
});





// handle storage using multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

var upload = multer({ storage: storage });



app.post("/create", upload.single('dataFile'), (req, res, next) => {
  const fname = req.body.fname;
  const lName = req.body.lName;
  const email = req.body.email;
  const phone = req.body.phone;
  const skills = req.body.skills;
  const status = req.body.status;
  const availability = req.body.availability;
  const file = req.files;
  

   db.query(
    "INSERT INTO  formsubmittable (fname, lName, email, phone, skills, status, availability, file) VALUES (?,?,?,?,?,?,?,'" + req.file + "')",
    [fname, lName, email, phone, skills, status, availability, file],
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