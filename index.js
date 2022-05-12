"use strict";
exports.__esModule = true;
/**
 * 入口文件
 */
var koa_1 = require("koa");
var index_js_1 = require("./src/routes/index.js");
var app = new koa_1["default"]();
app.use(index_js_1["default"]);
// app.use(async (ctx) =>{
//     ctx.body = 'hello index';
// })
app.listen(3000);
