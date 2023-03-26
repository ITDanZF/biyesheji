/**
 * @description 异常同一处理
 * @author 小玉
 */

const handelError = {
  accepts: () => 'json',
  all: (err, ctx) => {
    ctx.body = {
      status: ctx.status,
      message: err.message
    }
    
  }
}
module.exports = {
  handelError
}