const test = require('koa-test')
const app = require('./app')
const scenario = test(() => app)
scenario({
    title: 'GET /',
    path: '/',
    method: 'get',
    assertions: [
        (res, t) => t.equal(res.status, 200),
        (res, t) => t.equal(res.text, 'aloha\n')
    ]})
