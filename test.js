const test = require('koa-test')
const app = require('./app')
const scenario = test(() => app)

scenario({
    title: 'GET /',
    path: '/',
    method: 'get',
    assertions: [
        (res, t) => t.equal(res.status, 200),
        (res, t) => t.equal(res.text, '<p>hello, world.</p>\n')
    ]})

scenario({
    title: 'GET /hello.json',
    path: '/hello.json',
    method: 'get',
    assertions: [
        (res, t) => t.equal(res.status, 200),
        (res, t) => t.equal(res.text, JSON.stringify({ message:'aloha' }))
    ]})

scenario({
    title: 'GET /ping',
    path: '/ping',
    method: 'get',
    assertions: [
        (res, t) => t.equal(res.status, 200),
        (res, t) => t.equal(res.text, 'local')
    ]})

scenario({
    title: 'GET /shutdown',
    path: '/shutdown',
    method: 'get'
})




