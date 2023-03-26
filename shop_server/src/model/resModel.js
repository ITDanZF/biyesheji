
class BaseModel {
  constructor({ status, data, message }) {
    this.status = status
    this.data = data
    this.message = message
    if (!data) {
      this.data = []
    }
    if (!message) {
      this.message = ''
    }
  }
}


class SuccessModel extends BaseModel {
  constructor(recept, msg) {
    let message
    let data
    if (!msg) {
      if (typeof recept === 'string') {
         message = recept
      } else {
        data = recept
      }
    } else {
      message = msg
      data = recept
    }
    super({
      status: 200,
      data,
      message
    })
  }
}


class ErrorModel extends BaseModel {
  constructor({ errno, message }) {
    super({
      errno,
      message
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}