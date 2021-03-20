const Koa = require('koa')
const Router = require('koa-router')
const axios = require('axios')

const app = new Koa()

const router = new Router()

const getDataFromBackend = async ctx => {
    const response = await axios.get('http://localhost:3000/')
    ctx.body = response.data
}

router.get('/', getDataFromBackend) 

app.use(router.routes())

const server = app.listen(process.env.PORT || process.env.PORT, ()=> console.log('startei'))
module.exports = server