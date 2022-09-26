"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/jobs', (req, res) => {
    res.json({
        title: "Pizzaria guloso",
        deadline: "15/02/2023",
        value: "4500,00",
        inProgress: "true"
    });
});
app.listen(3333);
