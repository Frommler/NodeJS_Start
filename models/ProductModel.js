var mongoose = require('mongoose'); //підключили пакет 

var productSchema = mongoose.Schema({  //створили схему моделі
  name: String,
  price: Number,
  image: String,
}, {
  collection: 'products'
});

module.exports = mongoose.model('products', productSchema);// створили модель і module.exports = надали доступ в інших файлах