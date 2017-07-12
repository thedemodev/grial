const { resolve } = require('path');

module.exports = async function getLoaders(BASE_PATH) {
  try {
    return require(resolve(`${BASE_PATH}/loaders.js`));
  } catch (error) {
    console.log('Using default empty loaders');
    return {};
  }
};
