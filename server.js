const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");

let app = new Koa();

app.listen(8080);
console.log("The server has ran in 8080 port");

let router = new Router();

router.get("/",async ctx=>{
    //ctx.body = "111";
    ctx.throw(400,"your error");
})

app.use(router.routes());

app.use(static("./static",{
    maxAge:86400*1000,

}));
console.log(111112323);