// const Koa = require('koa');
import koa from 'koa';

const app = new koa();

app.use(async (ctx) =>{
    ctx.body = 'hello index';
})
app.listen(3000);