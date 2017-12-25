const Koa = require('koa')
const app = module.exports = new Koa()
const serve = require('koa-static')

app.use(serve("public"))

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

if (!module.parent) app.listen(8000)
