const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://pasalapranathi1:Pranathi2004@pranathi.oappuyy.mongodb.net/DummyCOllection?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error('Could not connect to MongoDB...', err));
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      tags: {
        type: [String], 
        default: []    
      },
      author:{
        type:String,
        required: true
      },
      price:{
        type:Number
        
      },
      date:{
        type:Date,
        default:Date.now()
       
      },
      isPublished:{
        type:Boolean
      }

})

const Course = mongoose.model('course-data',courseSchema)

async function createCourse(){
    const course = new Course({
        name:"doctor",
        author:"AKASH",
        price:10,
        tags:["ARTHO","CLOVE"],
        isPublished:true
    });
    
    const result = await course.save();
    console.log(result)
}

createCourse();

async function getCourses(){
  // const pageNumber = 2;
  // const pageSize = 10;
    const courses = await Course
    .find({author:"pranathi",  isPublished:true})
    // .find({isPublished:true,tags:{$in:["frontend","backend"]}})
    // .find({price:{$gte:10,$lte:20}})
    // .find({author:/^pra/i})//starts
    // .find({author:/pra$/i})//end
    // .find({author:/.*pra.*/i})//find in middle anywhere
    // .or([{author:"doctor"},{isPublished:true}])
    // .skip((pageNumber-1)*pageSize)
    // .limit(pageSize)
    // .sort({name:1})
    // .select({name:1,tags:1})
    // .count()
    console.log(courses)


}
getCourses()

//import mongodb
//mongoimport --db mongo-exercises --collection courses --drop --file exercise-data.json --jsonArray


//update 
async function updatecourse(id){
  // const course = await Course.findById(id)
//   const result = await Course.updateOne({_id:id},{$set:{
//     author:"xyz",
//     isPublished:false
//   }
// });
const result = await Course.findByIdAndUpdate(id,{
  $set:{
  author:"xyz1",
  isPublished:false
}
});
  // if(!course) return;
  // course.isPublished= true;
  // course.author='vijay';
  // course.set({
  //   isPublished:true,
  //   author:'vijay'
  // })
// const result = await course.save();
console.log(result)

}
updatecourse('65c4c55087bad89db5865ce7')


//delete
async function deleteCourse(id){
// const result = await Course.deleteOne({_id:id})
const result = await Course.findByIdAndDelete(id)
console.log(result);
}
deleteCourse('65c4c55087bad89db5865ce7')

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Listening on port ${port}...`);
// });