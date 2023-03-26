const dotenv = require('dotenv');
const { envConfigPath }  = require('../src/config/envPath')
//配置环境变量
const envConfig = dotenv.config({
  path: envConfigPath[process.env.NODE_ENV], // 配置文件路径
  encoding: 'utf8', // 编码方式，默认utf8
  debug: false // 是否开启debug，默认false
}).parsed;


const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const log4j = require('./config/log4j')
const cors = require('koa2-cors')
const  koaStatics = require("koa-static");
const { handelError } = require('../src/config/Error')
const { vertifyToken } = require('./middlewares/token')
const {koaBody} = require('koa-body');

if (!envConfig) {
  console.log('配置文件不存在');
  // 退出程序
  process.exit(1);
}

app.use(koaBody(
  {
      multipart: true,
      formidable: {
          maxFileSize: 200*1024*1024
      }
  }));

//配置静态资源路径
app.use(koaStatics(__dirname + "/public/"));

//登录中间件校验
app.use(vertifyToken)


//路由
const userApiRouter = require('./routes/api/forward/user')
const goodsApiRouter = require('./routes/api/forward/goods')
const collectApiRouter = require('./routes/api/forward/collect')
const categoryApiRouter = require('./routes/api/forward/category')
const orderApiRouter = require('./routes/api/forward/order')
const uploadFileApiRouter = require('./routes/api/forward/uploadFile')
const ratingsApiRouter = require('./routes/api/forward/ratings')




// 错误处理
onerror(app, handelError)

// 中间件
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))
app.use(json())
app.use(logger())
// app.use(require('koa-static')(__dirname + '/public'))


//跨域
app.use(cors({
  //设置允许来自指定域名请求
  origin: (ctx, next) => {
    return '*'  // 允许来自所有域名请求
  },
  maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  credentials: true, //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))


// 日志管理
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  log4j.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(userApiRouter.routes(), userApiRouter.allowedMethods())
app.use(goodsApiRouter.routes(), goodsApiRouter.allowedMethods())
app.use(collectApiRouter.routes(), collectApiRouter.allowedMethods())
app.use(categoryApiRouter.routes(), categoryApiRouter.allowedMethods())
app.use(orderApiRouter.routes(), orderApiRouter.allowedMethods())
app.use(uploadFileApiRouter.routes(), uploadFileApiRouter.allowedMethods())
app.use(ratingsApiRouter.routes(), ratingsApiRouter.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
