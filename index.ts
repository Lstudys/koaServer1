/**
 * 入口文件
 */
import koa from 'koa';

import router from './src/routes/index.js'

const app = new koa();

app.use(router);

// app.use(async (ctx) =>{
//     ctx.body = 'hello index';
// })
app.listen(3000);