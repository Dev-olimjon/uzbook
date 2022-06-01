"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_handlebars_1 = require("express-handlebars");
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const app = (0, express_1.default)();
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './pages');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', login_routes_1.default);
app.listen(9090, () => {
    console.log('server has been started on port 9090');
});