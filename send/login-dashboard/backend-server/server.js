const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const ruoteUrls = require('./routes/routes');
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Database Connected"))

app.use(express.json());
app.use(cors())
// app.get('/',ruoteUrls)
app.use('/app',ruoteUrls)

app.listen(4000, ()=>console.log(`Server Is runnig on port ${4000}`))




























































