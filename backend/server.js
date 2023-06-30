const express = require('express')
const auth = require('./routes/auth')
const dotenv =require('dotenv')
const cors = require('cors')
require('./db/mongo')  //----- mongo db path import
const app = express()

//----- using cors to comunicate with backend -----//

app.use(cors())

//----- dontenv file config
dotenv.config()
const PORT = process.env.PORT || 5000

//------ converting into jsonObject -----//
app.use(express.json())

//----- auth route -----//
app.use('/',auth)

//----- deployement code -----//


// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("frontend/build"));
//     const path = require("path")
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
//     })
// }


//----- server listen -----//
app.listen(PORT,()=>{
    console.log(`server running on https://localhost:${PORT}`)
})
