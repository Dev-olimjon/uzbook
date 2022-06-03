"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("../service/user.service"));
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    res.redirect('/login');
});
routes.get('/login', (req, res) => {
    res.render('login');
});
routes.post('/login', (req, res) => {
    let login = {
        email: req.body.email,
        password: req.body.password
    };
    user_service_1.default.register(login.email)
        .then(user => {
        if (user && user.password === login.password) {
            return res.redirect('/room');
        }
        else {
            res.sendStatus(404);
        }
    })
        .catch(err => {
        res.sendStatus(404);
    });
});
routes.get('/book', (req, res) => {
    res.render('books');
});
routes.get('/register', (req, res) => {
    res.render('register');
});
routes.get('/room', (req, res) => {
    // if (isLoggedIn) {
    res.render('cabinet');
    // } else {
    //     res.redirect('/')
    // }
});
routes.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let get_user = {
        id: 0,
        name: req.body.name,
        surname: req.body.surname,
        number: req.body.number,
        email: req.body.email,
        password: req.body.password
    };
    user_service_1.default.addUser(get_user)
        .then(() => res.redirect('/room'))
        .catch(() => res.redirect('/register'));
}));
routes.get("/logout", function (req, res) {
    req.session.destroy(() => {
        //req.logout();
        res.redirect("/login"); //Inside a callback… bulletproof!
    });
});
exports.default = routes;
