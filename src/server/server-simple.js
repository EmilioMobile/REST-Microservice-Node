const Koa = require('koa')
const app = new Koa()
const indexRoutes = require('../routes/index')
const concepnetRoutes = require('../routes/conceptnet')

app.use(indexRoutes.routes())
app.use(concepnetRoutes.routes())

port = 8080
module.exports = app.listen(process.env.PORT || port)


