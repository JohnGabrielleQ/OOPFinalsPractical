import Instructor from "../models/Instructor.js" 
  
 export const getCourses = async (req, res) => { 
     try { 
         const instructor = await Instructor.findById(req.params.instructorId) 
         const { year, semester } = req.query 
  
         if (year) { 
             instructor.courses = instructor.courses.filter((item) => item.year == year) 
         } 
         if (semester) { 
             instructor.courses = instructor.courses.filter((item) => item.semester == semester) 
         } 
  
         if (instructor.courses.length !== 0) 
             res.status(200).json(instructor.courses) 
         else 
             res.status(204).send() 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const getCourse = async (req, res) => { 
     try { 
         const {instructorId, id } = req.params 
         const instructor = await Instructor.findById(instructorId) 
         const course = instructor.courses.id(id) 
         if (course) 
             res.status(200).json(course) 
         else 
             res.status(404).json({ error: 'resource not found' }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const addCourse = async (req, res) => { 
     try { 
         const newCourse = req.body 
         const instructor = await Instructor.findById(req.params.instructorId) 
         instructor.courses.push(newCourse) 
         await instructor.save() 
         const idNewCourse = instructor.courses[itructor.courses.length-1]._id 
         res.status(201).json({ id: idNewCourse }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const deleteCourse = async (req, res) => { 
     try { 
         const {instructorId, id } = req.params 
         const instructor = await Instructor.findById(instructorId) 
         instructor.courses.id(id).remove(); 
         await instructor.save() 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 } 
  
 export const updateCourse = async (req, res) => { 
     try { 
         const {instructorId, id } = req.params 
         const instructor = await Instructor.findById(instructorId) 
  
         const {code, description, semester, year, lectureHours, labHours } = req.body 
         instructor.courses.id(id).code = code 
         instructor.courses.id(id).description = description 
         instructor.courses.id(id).semester = semester 
         instructor.courses.id(id).year = year 
         instructor.courses.id(id).lectureHours = lectureHours 
         instructo.courses.id(id).labHours = labHours 
  
         await instructor.save() 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 }