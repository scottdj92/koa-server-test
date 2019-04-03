import Koa from "koa";

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "hello world";
    console.log(ctx.request.url);
});

app.listen(3000);
