import  express  from "express";
import cors from "cors"
import { engine } from "express-handlebars";
import loginRoutes from "./routes/login.routes"
const app = express()
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './pages');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',loginRoutes)
app.listen(9090,()=>{
    console.log('server has been started on port 9090')
})