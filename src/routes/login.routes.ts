import { Router } from "express";
import User from "../model/user.model";
import userService from "../service/user.service";
import login from "../model/login.model";
import client from "../db/client";
const routes = Router()
routes.get('/',(req,res)=>{
    res.redirect('/login')
})
routes.get('/login',(req,res)=>{
    res.render('login')
})
routes.post('/login',(req,res)=> {
    let login: login = {
        email: req.body.email,
        password: req.body.password
    }
    userService.register(login.email)
        .then(user => {
            if (user && user.password === login.password) {
                return res.redirect('/room')
            }
            else {
                  res.sendStatus(401)
            }
        })
        .catch(
            err=>{
                res.sendStatus(404)
            }
        )

})

routes.get('/register',(req,res)=>{
    res.render('register')
})
routes.get('/room',(req,res)=>{
    res.render('cabinet')
})
routes.post('/register',async(req,res)=>{
let get_user:User ={
    id: 0,
    name: req.body.name,
    surname: req.body.surname,
    number:req.body.number,
    email:req.body.email,
    password:req.body.password
}
userService.addUser(get_user)
    .then(()=> res.redirect('/room'))
    .catch(()=>res.redirect('/register'))
})

export default routes;