"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(401).send(err.message);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
