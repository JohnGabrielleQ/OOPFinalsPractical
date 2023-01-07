import express from 'express' 
import { getInstructor, getInstructors, addInstructor, updateInstructor, deleteInstructor } from '../controllers/instructors.js' 
 import { verifyToken } from '../middleware/auth.js' 
  
 const router = express.Router({mergeParams: true}) 
  
 router.get('/', verifyToken, getInstructors) 
 router.get('/:id', verifyToken, getInstructor) 
 router.post('/', verifyToken, addInstructor) 
 router.put('/:id', verifyToken,updateInstructor ) 
 router.delete('/:id', verifyToken, deleteInstructor) 
  
 export default router