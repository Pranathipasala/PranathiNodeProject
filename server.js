const config = require('config')
const startupDebugger = require("debug")("app:startup")
const dbDebugger = require("debug")("app:db")
const courserouter = require('./routes/coursesroute')
const home = require('./routes/home')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require("express")
const app = express();
const Joi = require("joi")
const logger = require('./middleware/logger')

app.set('view engine','pug')
app.set('views','./views')



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
//http://localhost:3000/readme.txt use this to run readme file in localhost
app.use(helmet());
app.use(morgan('tiny'));
//POST /api/courses 400 18 - 11.781 ms//response

app.use(logger)

app.use('/api/courses',courserouter)
//environments
if(app.get('env')=== 'development'){
    app.use(morgan('tiny'))
    startupDebugger("morgan enabled")
}
// //db work....
// dbDebugger("connected to the database")



//configuration
console.log('Application Name:' + config.get("name"))
console.log('mail server:' + config.get("mail.host"))
// console.log('mail password:' + config.get("mail.password"))

const courses = [
  {id:1,name:"course1"},
  {id:2,name:"course2"},
  {id:3,name:"course3"},
]


router.get('/', (req,res) =>{
    res.send("i am pranathi software developer!!")
})

router.get('/api/courses', (req,res) =>{
    res.send([1,2,3]);
})

// router parameter
router.get('/api/courses/:id',(req,res)=>{
res.send(req.params.id)
})

router.get('/api/posts/:year/:month',(req,res)=>{
    // res.send(req.params.year)
     res.send(req.params)
    })



//template engines of pug,mustache,ejs
router.get('/', (req,res) =>{
  res.send('index',{title:"My Express App",message:"Hello"})
})



// //Handling HTTP get request
router.get('/',(req,res)=>{
  res.send(courses);
  })

router.get('/:id',(req,res)=>{
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(400).send("the course didn't find with given id")
  res.send(course)
})

//Handling HTTP post request
router.post('/', async (req, res) => {
  //object destructure
  const { error } = validationCourse(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});


//Handling http Put request
router.put('/:id', async (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("The course with the given ID was not found.");
  }

  const { error } = validationCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  course.name = req.body.name;
  res.send(course);
});


router.delete('/:id',(req,res)=>{
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("The course with the given ID was not found.");
  }
  const index = courses.indexOf(course)
  courses.splice(index,1)
  res.send(course)
})

function validationCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}


  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

