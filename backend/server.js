import app from './app.js'
import { connectDB } from './db/connectDB.js'

app.listen(process.env.PORT,() => {
    connectDB()
    console.log("server is running")
})