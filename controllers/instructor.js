import Instructor from '../models/Instructor.js' 
  
 export const getInstructors = async (req, res) => { 
     try { 
         const instructors = await Instructor 
             .find({ programId: req.params.programId }) 
             .populate('programId') 
             .select('version year programId') 
         if (instructors.length !== 0) 
             res.status(200).json(instructors) 
         else 
             res.status(204).send() 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const getInstructor = async (req, res) => { 
     try { 
         const { id } = req.params 
         const instructor = await Instructor.findById(id) 
             .populate('programId') 
             .select('version year programId') 
         if (instructor) 
             res.status(200).json(instructor) 
         else 
             res.status(404).json({ error: 'resource not found' }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const addInstructor = async (req, res) => { 
     try { 
         const { version, year } = req.body 
         const programId = req.params.programId 
         const newInstructor = await Instructor   .create({ 
             version, 
             year, 
             programId 
         }) 
         const savedInstructor = await newInstructor.save() 
         res.status(201).json({ id: savedInstructor._id }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const deleteInstructor = async (req, res) => { 
     try { 
         await Instructor.deleteOne({  
             programId: req.params.programId,  
             _id: req.params.id  
         }) 
         res.status(204).send() 
     } catch (err) { 
         res.status(404).json({ error: err.message }) 
     } 
 } 
  
 export const updateInstructor = async (req, res) => { 
     try { 
         const filter = {  
             programId: req.params.programId,  
             _id: req.params.id  
         } 
         const { version, year } = req.body 
         const update = {  
             version: version,  
             year: year 
         } 
  
         await Curriculum.findOneAndUpdate(filter, update) 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 }