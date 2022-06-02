"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_router = (0, express_1.Router)();
room_router.get('/room', (req, res) => {
    res.render('cabinet');
});
exports.default = room_router;
