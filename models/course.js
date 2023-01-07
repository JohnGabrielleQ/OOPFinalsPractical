Import mongoose from ‘mongoose’ 

  Export const CourseSchema = new mongoose.Schema( 
     { 
         Code: { type: String, required: true, unique: true }, 
         Description: { type: String, required: true }, 
         Semester: { type: Number, required: true }, 
         Year: { type: Number, required: true }, 
         Specialization: String, 
         lectureHours: { type: Number, required: true }, 
         labHours: { type: Number, required: true } 
     },  
     { timestamps: true } 
 ) 
  
 Const Course = mongoose.model(‘Course’, CourseSchema) 
 Export default Course
