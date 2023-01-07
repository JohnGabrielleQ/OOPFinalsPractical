Import  User  from ‘../models/User.js’ 

 Import bcrypt from ‘bcrypt’ 
  
 Export const getUsers = async (req, res) => { 
     Try { 
         Const users = await User.find() 
         If (users.length !== 0) 
             Res.status(200).json(users) 
         Else 
             Res.status(204).send() 
     } catch (err) { 
         Res.status(500).json({ error: err.message }) 
     } 
 } 
  
 Export const getUser = async (req, res) => { 
     Try { 
         Const { id } = req.params 
         Const user = await User.findById(id) 
         If (user) 
             Res.status(200).json(user) 
         Else 
             Res.status(404).json({ error: ‘resource not found’ }) 
     } catch (err) { 
         Res.status(404).json({ error: err.message }) 
     } 
 } 
  
 Export const deleteUser = async (req, res) => { 
     Try { 
         Await User.deleteOne({ _id: req.params.id }) 
         Res.status(204).send() 
     } catch (err) { 
         Console.log(err) 
         Res.status(404).json({ error: err.message }) 
     } 
 } 
  
 Export const updateUser = async (req, res) => { 
     Try { 
         Const filter = { _id: req.params.id } 
         Const { firstName, lastName, email, password } = req.body 
         Const salt = await bcrypt.genSalt() 
         Const encryptedPassword = await bcrypt.hash(password, salt) 
  
         Const update = { 
             firstName, 
             lastName, 
             email, 
             password: encryptedPassword 
         } 
  
         Await User.findOneAndUpdate(filter, update) 
         Res.status(204).send() 
     } catch (err) { 
         Console.log(err) 
         Res.status(404).json({ error: err.message }) 
     } 
 }