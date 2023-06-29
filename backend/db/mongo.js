const mongoose = require('mongoose')
const dotenv =require('dotenv')

dotenv.config()
 

mongoose.connect(process.env.MONGO,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}) 
.then(()=> {
        console.log(`mongoconnect`)
})
.catch((err)=>console.log(err))
