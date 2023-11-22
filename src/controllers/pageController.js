"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
var itens_1 = require("../models/itens");
var home = function (req, res) {
    var list = itens_1.tabela.getAll();
    res.render('pages/page', {
        banner: {
            title: 'Tabela',
            background: 'AfonsoClaudio.jpg'
        },
        list: list
    });
    console.log(list);
};
exports.home = home;
