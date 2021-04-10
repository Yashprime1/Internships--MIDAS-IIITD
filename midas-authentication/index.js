const express = require('express');
const mongoose = require('mongoose');
const ejsLint = require('ejs-lint');
const authRoutes = require('./routes/authRoutes');
const {requireAuth,checkUser} = require('./middleware/authMiddleware')
const cookieParser = require('cookie-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// middleware
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.DB_URL;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(process.env.PORT || 3000))
  .catch((err) => console.log(err));

// routes
app.get('*',checkUser);
app.use(authRoutes);
app.get('/', (req, res) => res.render('home'));
app.get('/Contacts', requireAuth,(req, res) => res.render('contact'));
app.get('/blog-1', requireAuth,(req, res) => res.render('blog-1'));
app.get('/blog-2' ,(req, res) => res.render('blog-2'));
app.get('/internship', requireAuth,(req, res) => res.render('internship'));
app.get('/rpapers',(req, res) => res.render('rpapers'));
app.get('/projects',(req, res) => res.render('projects'));
app.get('/hiring', requireAuth,(req, res) => res.render('hiring'));