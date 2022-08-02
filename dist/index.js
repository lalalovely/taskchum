"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
let server;
(async function () {
    const app = await (0, app_1.default)();
    server = http_1.default.createServer(app);
    server.listen(config_1.default.PORT, () => {
        console.log("Initializing server");
        console.log("Migrating database");
        console.log(`Server ready to serve traffic http://${config_1.default.HOST}:${config_1.default.PORT}`);
    });
})();
