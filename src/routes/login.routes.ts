import { Router } from "express";
import User from "../model/user.model";
import userService from "../service/user.service";
import login from "../model/login.model";
import client from "../db/client";
const routes = Router()
routes.get('/',(req,res)=>{
    if(!req.session.email){
        res.redirect('/login')
    }
    else {
        res.redirect('/')
        res.render('cabinet')
    }
})
routes.get('/login',(req,res)=>{
    res.render('login')
})
routes.post('/login',(req,res,next)=> {
    let login: login = {
        email: req.body.email,
        password: req.body.password
    }
    userService.register(login.email)
        .then(user => {
            if (user && user.password === login.password) {
                req.session.email = req.body.email
                res.redirect('/')
                res.render('cabinet')
            }
            else {
                res.sendStatus(404)
            }
        })
        .catch(
            err=>{
                res.sendStatus(404)
            }
        )
})
routes.get('/book',(req,res)=>{
    res.render('books')
})
routes.get('/register',(req,res)=>{
    res.render('register')
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
    .then(()=> res.redirect('/login'))
    .catch(()=>res.redirect('/register'))
})


export default routes;