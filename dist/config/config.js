"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const defaultPort = 3001;
const defaultHost = "localhost";
const config = {
    HOST: process.env.HOST || defaultHost,
    PORT: process.env.PORT || defaultPort,
};
exports.default = config;
