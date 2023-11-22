"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PageController = require("../controllers/pageController");
var router = (0, express_1.Router)();
router.get('/', PageController.home);
exports.default = router;
