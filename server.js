const mongoose = require('mongoose');

const uri = "mongodb+srv://hduser:AQCDTKFtJUS8zhAO@cluster0.7njsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log(" Connected to MongoDB Atlas!");
}).catch(err => {
    console.error(" Error connecting to MongoDB:", err);
});
