module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ts/dist/'
    : '/',
  indexPath: '../index.html',
}