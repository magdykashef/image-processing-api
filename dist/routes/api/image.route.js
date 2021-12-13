"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_controller_1 = __importDefault(require("../../controllers/image.controller"));
var image = express_1.default.Router();
//   /api/images/?filename=icelandwaterfall&width=500&height=500
image.get('/', image_controller_1.default);
exports.default = image;
