module.exports = {
  lintOnSave: false,
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/the-f2e-w5/'
    : '/'
}
