"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_route_1 = __importDefault(require("./api/image.route"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    return res.status(200).send('main api endpoint');
});
routes.use('/image', image_route_1.default);
exports.default = routes;
