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
    let err, result = await db.execute('describe keyspaces')
    console.log(err, result)
    ctx.body = { message: 'aloha' }
}))

if (!module.parent) app.listen(8000)
