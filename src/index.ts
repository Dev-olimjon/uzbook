import  express  from "express";
import cors from "cors"
import { engine } from "express-handlebars";
import loginRoutes from "./routes/uzbook.routes"
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express()
import * as path from "path";
import uzbookRoutes from "./routes/uzbook.routes";
import User from "./model/user.model";
import Favicon from "serve-favicon";
import Path from "path"
declare module "express-session" {
    interface SessionData {
        email: string,
        user:User
    }
}
app.use(bodyParser())
app.use(cookieParser())
app.use(session({
    secret: 'secret-code',
    proxy: true,
    saveUninitialized: true
}))
app.use(Favicon('./public/favicon.png'));
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './pages');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',uzbookRoutes)
app.use(express.static(path.join(__dirname, "../public")))
app.listen(9090,  ()=>{
    console.log('server has been started on port 9090')
})