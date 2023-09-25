import express from 'express'
import Complain from '../models/complain.js'

const router = express.Router();

// router.post('/complain',async(req,res)=>{
//     const data = req.body;
//     console.log(data)
//     const user = await Complain.create(data)
//     res.status(201).json({
//         success:true,
//         user
//     })
// })

router.post('/complain', upload.single('file'), (req, res) => {
    // req.file contains the uploaded file information
    if (!req.file) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // You can process the uploaded file here or save its information to a database
    console.log('File uploaded:', req.file);
    res.send('File uploaded!');
  });

  export default router
  
