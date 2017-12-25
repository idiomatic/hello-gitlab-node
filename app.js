const Koa = require('koa')
const app = module.exports = new Koa()
const route = require('koa-route')
const serve = require('koa-static')

app.use(serve("public"))

app.use(route.get('/hello.json', async (ctx) => {
    ctx.body = { message: 'aloha' }
}))

if (!module.parent) app.listen(8000)
