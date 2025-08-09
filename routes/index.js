var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./post');
const passport = require('passport');
const localStrategy = require('passport-local');
const upload = require('./multer');
const { get } = require('mongoose');
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res){
  const userData = new userModel({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname
  })
  // You can write the above code like this as well:
  // const {username, email, fullname} = req.body;
  // const userData = new userModel({username, email, fullname});

  userModel.register(userData, req.body.password)
    .then(function(){
      passport.authenticate('local')(req, res, function(){
        res.redirect('/profile');
      })
    })
})

router.get('/login', function(req, res){
  const error = req.flash('error');
  console.log(error);
  res.render('login', {error: error});
})

router.post('/login', passport.authenticate("local", {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
}),function(req, res){})

router.get('/feed', isLoggedIn,async function(req, res){
  let user = await userModel.findOne({
    username: req.session.passport.user
  })
  let posts = await userModel.findOne({
    username: req.session.passport.user
  }).populate('posts')
  res.render('feed', {title: 'Feed', user:user, userposts:posts});
})

router.get('/logout', function(req, res){
  req.logout(function(err){
    if(err){
      return next(err);
    }
    res.redirect('/login')
  })
})

router.get('/profile', isLoggedIn, async function(req, res, next){
  let user = await userModel.findOne({
    username: req.session.passport.user    //jab bhi app login karte ho, session passport mein username(aapki details) store ho jaati hai.
  }).populate('posts'); // populate se hum user ke posts ko bhi fetch kar lete hain, taaki user ke posts bhi profile page par dikh sakein
  res.render('profile',{user, error: req.flash('fileError')}); // fileError ko flash message ke through bhej rahe hain, agar file upload mein koi error aata hai to
  // agar aapko file upload hone par success message chahiye to aap res.render('profile', {user, success: 'File uploaded successfully!'}); 
})

router.get("/dashboard", isLoggedIn, async function(req, res){
  let userDetails = await userModel.findOne({
    username: req.session.passport.user
  })
  .populate("posts");

  res.render("dashboard",{user: userDetails, error: req.flash("fileError")});
})

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

router.post('/upload', isLoggedIn, upload.single('file'), async (req, res) => {
  if(!req.file){
    req.flash('fileError', 'Please upload a file');
    return res.status(400).redirect('/dashboard');
  }
  // abhi tak file keval upload hui hai, database mein store nahi hui hai
  // ab humein file ka path database mein store karna hai aur postid create karni hai aur fir user ko provide bhi karni hai

  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  const postData = await postModel.create({
    image: req.file.filename, // multer ke through file ka naam milta hai
    imageTitle: req.body.imagetitle,
    imageCaption: req.body.imagecaption,
    user: user._id // user ki id ko post ke saath link karna hai
  })
  // ab post ki id ko user ke posts mein add karna hai
  user.posts.push(postData._id);
  await user.save(); // user ko save karna hai taaki post ki id user ke posts mein add ho jaye
  // ab humein user ke profile page par redirect karna hai
  req.flash('fileError', 'File uploaded successfully!');
  res.redirect('/dashboard');
  // agar aapko file upload hone par success message chahiye to aap res.send('File uploaded successfully!') bhi kar sakte ho
  // lekin hum profile page par redirect kar rahe hain, isliye hum success message nahi bhej rahe hain
  // res.send('File uploaded successfully!')
})


router.get('/navbar', isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({
    username: req.session.passport.user
  }).populate("posts")
  console.log(user)
  res.render('navbar', {user: user});
})

router.get('/home', isLoggedIn ,async (req, res) => {
  let user = await userModel.findOne({
    username: req.session.passport.user
  }).populate("posts")
  // let user = undefined;
  let feeds = await userModel.find({posts: {$exists: true}}).populate('posts');
  // res.json(feeds); // or res.render('allfeed', {feeds});
  res.render('feed', {feeds: feeds, user: user})
});


router.get("/pin-creation-tool",isLoggedIn , async (req, res)=>{
  let userDetails = await userModel.findOne({
    username: req.session.passport.user
  })
  res.render("pincreationtool",{user: userDetails, error: req.flash("fileError")})
})

module.exports = router;

