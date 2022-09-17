"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = __importDefault(require("http"));
const service_1 = __importDefault(require("./services/service"));
const router = (0, express_1.default)();
router.use((0, morgan_1.default)('dev'));
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
router.use('/', service_1.default);
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
const httpServer = http_1.default.createServer(router);
const port = 3000;
httpServer.listen(port, () => {
    console.log(`!!!!!!!!->Server Started<-!!!!!!!!`);
    console.log(`The server is running at port:${port}`);
});
