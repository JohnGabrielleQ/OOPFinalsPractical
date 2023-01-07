Import jwt from “jsonwebtoken”; 

  
 Export const verifyToken = async (req, res, next) => { 
   Try { 
     Let token = req.header(“Authorization”); 
  
     If (!token) { 
       Return res.status(401).send(“Unauthorized”); 
     } 
  
     If (token.startsWith(“Bearer “)) { 
       Token = token.slice(7, token.length).trimLeft();  
     } 
  
     Const verified = jwt.verify(token, process.env.JWT_SECRET); 
     Req.user = verified; 
     Next(); 
   } catch (err) { 
     Res.status(500).json({ error: err.message }); 
   } 
 };