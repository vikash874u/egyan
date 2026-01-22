const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // ✅ ADD THIS
const studentRoutes = require('./routes/studentRoutes');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/AdminRoutes');
const materialRoutes = require('./routes/materialRoutes');
const studentFeedbackRoutes = require("./routes/studentFeedbackRoutes");



const app = express();
app.use(cors());
app.use(express.json());


//Mongodb connection
mongoose.connect('mongodb+srv://vikashkumararrah12_db_user:aPcSlLyDpPdnA1ex@cluster0.3migtfp.mongodb.net/egyandb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log('mongodb connected successfully')
}).catch((err)=>{
    console.error(err)
})
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// api calling
app.use('/api/students',studentRoutes)
app.use('/api/contact', contactRoutes);
app.use('/api/admins', adminRoutes);
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use('/api/materials',materialRoutes);
app.use("/api/student-feedback", studentFeedbackRoutes);





//server creating
app.listen(5000,()=>{
    console.log('server is running at port 5000')
})