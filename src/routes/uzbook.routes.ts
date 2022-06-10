import { Router } from "express";
import User from "../model/user.model";
import userService from "../service/user.service";
import login from "../model/login.model";
import client from "../db/client";
import Userdate from "../model/userdate.model";
import userdateModel from "../model/userdate.model";
const routes = Router()
routes.get('/',(req,res)=>{
    if(!req.session.user){
        res.redirect('/login')
    }
    else {
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
    userService.register(login.email,)
        .then(user => {
            if (user) {
                if (user.password === login.password) {
                    req.session.user = user
                    //req.session.email = req.body.email
                    res.render('cabinet')
                    res.redirect('/')
                } else {
                    res.redirect('/err')
                }
            } else {
                res.redirect('/err')
            }
        })
        .catch(
            err=>{
                res.redirect('/err')
            }
        )
})
routes.get('/about',(req,res)=>{
    res.render('about')
    if(!req.session.user){
        res.redirect('/login')
    }
    else {
        res.render('about')
    }
})
routes.get('/book',(req,res)=>{
    res.render('books')
    if(!req.session.user){
        res.redirect('/login')
    }
    else {
        res.render('books')
    }
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

routes.get('/logout',(req,res)=>{
    req.session.user = undefined
    res.redirect('/')
})

routes.get('/profile',(req,res)=>{
    res.render('profile')
    if(!req.session.user){
        res.redirect('/login')
    }
    else {
        res.render('profile',{user: req.session.user})
    }
})

routes.get('/like',(req,res)=>{
   res.redirect('/')
})
routes.get('/dislike',(req,res)=>{
    res.redirect('/')
})

routes.get('/err',(req,res)=>{
    res.render('error')
})

//----------------------------------------------------------------------------------------------------------
// books settings



export default routes;