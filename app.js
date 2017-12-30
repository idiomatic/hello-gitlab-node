const Koa = require('koa')
const app = module.exports = new Koa()
const route = require('koa-route')
const serve = require('koa-static')
const cassandra = require('cassandra-driver')
const db = new cassandra.Client({
    contactPoints: ['cassandra'],
    keyspace: 'system'
})

app.use(serve("public"))

app.use(route.get('/hello.json', async (ctx) => {
    ctx.body = { message: 'aloha' }
}))

app.use(route.get('/ping', async (ctx) => {
    let err, result = await db.execute('describe keyspaces')
    if (err) console.error(err)
    ctx.body = result
}))

if (!module.parent) app.listen(8000)
