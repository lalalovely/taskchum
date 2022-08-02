"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
async function getAll(req, res, next) {
    try {
        const user = { name: "Lovely", id: "214" };
        //const userResponse = await Promise.all(user.map(formatUser));
        return res.json(user);
    }
    catch (e) {
        console.log(e);
        next(e);
    }
    return res.json();
}
router.route("/").get(getAll);
exports.default = router;
