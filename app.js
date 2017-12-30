const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const cassandra = require('cassandra-driver')

const dbHost = process.env.DB_HOST || 'cassandra'
const db = new cassandra.Client({
    contactPoints: [dbHost]
})

const app = new Koa()
const router = new Router()

router.get('/hello.json', (ctx) => {
    ctx.body = { message: 'aloha' }
})

router.get('/ping', async (ctx) => {
    let _, result = await db.execute('SELECT * FROM system.local LIMIT 1')
    ctx.body = result.rows[0].key
})

var server = null

router.get('/shutdown', async (ctx) => {
    await db.shutdown()
    ctx.body = 'bye\n'
    if (server) server.close()
})

app.use(serve("public"))
app.use(router.routes())
app.use(router.allowedMethods())

if (!module.parent) server = app.listen(8000)

module.exports = app
