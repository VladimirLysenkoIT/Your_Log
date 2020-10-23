const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
const PORT = config.get('port')
const MONGOURI = config.get('mongoURI')

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes.js'))
app.use('/api/userdata', require('./routes/userdata.routes.js'))
app.use('/api/nutrientsRatio', require('./routes/nutrientsRatio.routes.js'))
app.use('/api/products', require('./routes/products.routes.js'))

async function start(){
    try {
        // await mongoose.connect(MONGOURI,{
        //     useNewUrlParser: true,
        //     useUnifiedTopology:true,
        //     useCreateIndex:true,
        //     useFindAndModify:false
        // })
        await mongoose.connect('mongodb+srv://volodya:123456qMongo@cluster0.dlrpx.mongodb.net/<dbname>?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}`)
    start()
})