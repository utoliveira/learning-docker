const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')

const app = new Koa()
app.use(cors())

const router = new Router()
router.get('/', ctx => {
    ctx.body = 'hello world'
}) 

app.use(router.routes())

const server = app.listen(process.env.PORT || process.env.PORT, ()=> console.log('startei'))
module.exports = server