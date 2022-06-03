import  express  from "express";
import cors from "cors"
import { engine } from "express-handlebars";
import loginRoutes from "./routes/login.routes"
import session from "express-session";
import cookieParser from "cookie-parser";
const app = express()
declare module "express-session" {
    interface SessionData {
        email: string
    }
}
// sessions
app.use(session({
    secret: 'secret-code',
    proxy: true,
    saveUninitialized: true
}))
app.use(cookieParser())
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './pages');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',loginRoutes)
app.listen(process.env.PORT || 9090,  ()=>{
    console.log('server has been started on port 9090')
})