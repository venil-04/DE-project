import express from 'express'
import userRoute from './routes/user.js';
import cors from 'cors'
import mongoose from 'mongoose';

const app = express();
app.use(cors())
app.use(express.json())
app.use(userRoute)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "de-backend" })
  .then(() => {
    console.log("database is connected!");
  })
  .catch((e) => console.log(e));


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Uploads will be stored in the "uploads" directory
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage });


app.listen(5000,(req,res)=>{
    console.log('server is running on port 5000')
})