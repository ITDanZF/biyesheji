const { Order }  = require('../db/model/index')

async function createOrder(orderItem) {

  const res = await Order.create({
    tel:orderItem.tel,
    title:orderItem.title,
    img:orderItem.image,
    order:orderItem.order,
    xq:orderItem.xq,
    money:orderItem.money,
    num:orderItem.num,
    shopNum:orderItem.shopNum,
    goods_id:orderItem.id,
    bianhao:orderItem.bianhao,
    spicy:orderItem.spicy,
    shijian:orderItem.shijian,
    fenliang:orderItem.fenliang,
    totalMoney:orderItem.totalMoney,
    totalNum:orderItem.totalNum
  })
  return res
}

async function selectOrderByTel(tel) {
  const resData = await Order.findAndCountAll({
    tel
  })

  return resData.rows.map( item => item.dataValues)
}

async function updateOrder(resData) {
  const res = await Order.update({
    active: '1'
  }, {
    where: {
      bianhao:resData.bianhao
    }
  })
  return res
}

module.exports = {
  createOrder,
  selectOrderByTel,
  updateOrder
}