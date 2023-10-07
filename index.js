const exp = require("express");
const bodyp = require("body-parser");
const re = require("request");
const ejs = require("ejs");
const multer = require('multer');
const path = require('path');

const app = exp();

app.use(exp.static("public"));
app.use(bodyp.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views', 'views');


const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, uniqueSuffix + ext);
    }
  });
  
  const upload = multer({ storage });
  


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})


app.post('/Resume%20view', upload.single('image'), (req, res) => {
    if (req.file) {
      // If an image was uploaded, pass its URL to the template
      const imageUrl = '/uploads/' + req.file.filename;
      res.render('resume', { imageUrl:imageUrl ,name:req.body.name , email:req.body.email , phone:req.body.phone 
        , prof:req.body.prof , place:req.body.place,
      
      dob:req.body.dob,link:req.body.link,skill:req.body.skill
      ,lang:req.body.lang
      ,exp:req.body.exp
      ,edu:req.body.edu
    });
    } else {
      // Handle errors if the upload failed
      res.render('resume', { imageUrl: null });
    }

   
  });
  











const port = 3000

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))
