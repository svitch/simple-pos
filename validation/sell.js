const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSell(data) {
  let errors = {};

  data.type = !isEmpty(data.type) ? data.type : '';
  data.goods_list = !isEmpty(data.goods_list) ? data.goods_list : '';

  if (!Validator.equals(data.type, 'SELL'))
    errors.email = 'Неверный тип запроса';

  if (Validator.isEmpty(data.type))
    errors.type = 'Не указан тип запроса';

   if (!Validator.isISO8601(data.datetime))
    errors.datetime = 'Неверный формат даты запроса';

  if (Validator.isEmpty(data.datetime))
    errors.datetime = 'Не указана дата запроса';

  if (data.goods_list.length === 0)
    errors.goods_list = 'В запросе нет товаров';

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
