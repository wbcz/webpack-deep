// // 通过 CommonJS 规范导入 show 函数
import('./show').then((show) => {
    // 执行 show 函数
    show('Webpack');
})
import('./test').then((show) => {
})

import('./o').then((show) => {
})
// const test = require('./test.js');
const show = require('./a.js');
const show = require('./go.js');


