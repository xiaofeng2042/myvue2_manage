'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NODE_HOST: '"http://47.75.8.92:32776"'
  // NODE_HOST: '"http://127.0.0.1:3000"'
})
