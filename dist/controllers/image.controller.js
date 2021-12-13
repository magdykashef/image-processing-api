"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var fs_2 = require("fs");
var image_util_1 = require("../utils/image.util");
// /api/image/?filename=palmtunnel&width=500&height=500
var resizeImageController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filename_1, width_1, height_1, resizedImageBuffer, fileData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                if (!req.query.filename) {
                    return [2 /*return*/, res.status(400).send({ error: 'file name is missing' })];
                }
                if (!req.query.width) {
                    return [2 /*return*/, res.status(400).send({ error: 'width value is missing' })];
                }
                if (isNaN(parseInt(req.query.width))) {
                    return [2 /*return*/, res.status(400).send({ error: 'width value is not a number' })];
                }
                if (parseInt(req.query.width) < 1) {
                    return [2 /*return*/, res.status(400).send({
                            error: 'must provide positive width value',
                        })];
                }
                if (!req.query.height) {
                    return [2 /*return*/, res.status(400).send({ error: 'height value is missing' })];
                }
                if (isNaN(parseInt(req.query.height))) {
                    return [2 /*return*/, res.status(400).send({ error: 'height value is not a number' })];
                }
                if (parseInt(req.query.height) < 1) {
                    return [2 /*return*/, res.status(400).send({
                            error: 'must provide positive height value',
                        })];
                }
                filename_1 = req.query.filename;
                width_1 = parseInt(req.query.width);
                height_1 = parseInt(req.query.height);
                // send resized image if already exists
                if (fs_1.default.existsSync((0, image_util_1.resizedImagePath)(filename_1, width_1, height_1))) {
                    return [2 /*return*/, res
                            .status(200)
                            .sendFile((0, image_util_1.resizedImagePath)(filename_1, width_1, height_1))];
                }
                return [4 /*yield*/, (0, image_util_1.resize)(filename_1, width_1, height_1)];
            case 1:
                resizedImageBuffer = _a.sent();
                return [4 /*yield*/, fs_2.promises.open((0, image_util_1.resizedImagePath)(filename_1, width_1, height_1), 'w')];
            case 2:
                fileData = _a.sent();
                return [4 /*yield*/, fileData.write(resizedImageBuffer)];
            case 3:
                _a.sent();
                return [4 /*yield*/, fileData.close().then(function () {
                        return res
                            .status(200)
                            .sendFile((0, image_util_1.resizedImagePath)(filename_1, width_1, height_1));
                    })];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(500).send({ error: "".concat(error_1) })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.default = resizeImageController;
