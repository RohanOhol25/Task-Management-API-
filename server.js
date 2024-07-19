const express = require("express");
const bodyParser = require("body-parser");
const userAPI = require('./routes/userAPI.js');
const taskAPI = require('./routes/taskAPI.js');
const {connectDB} = require('./config/db.js');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

connectDB();
const PORT =6025;

app.use('/api/user', userAPI);
app.use('/api/task',taskAPI);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`);
});
