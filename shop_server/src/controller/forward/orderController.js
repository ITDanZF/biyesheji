const { SuccessModel } = require('../../model/resModel')
const { createOrder, selectOrderByTel, updateOrder }  = require('../../service/orderService')


async function addOrder(orderItem) {
  const resItem = orderItem.dingdanArr.map(item => {
    item.tel = orderItem.tel
    item.spicy = orderItem.spicy
    item.other = orderItem.other
    item.bianhao = orderItem.bianhao
    item.totalMoney = orderItem.totalMoney
    item.totalNum = orderItem.totalNum
    item.shijian = orderItem.shijian
    return item
  })

  const addData = await Promise.all(resItem.map( async(item) => {
    return await createOrder(item)
  }))

  return new SuccessModel(addData, "表单插入成功")
}

async function getOrderByTel(tel) {
  const resData =  await selectOrderByTel(tel)
  console.log(resData);
  return new SuccessModel(resData)
}

async function alterOrder(resObj) {
  const res = await updateOrder(resObj)
    return new SuccessModel(res)
}

module.exports = {
  addOrder,
  getOrderByTel,
  alterOrder
}