// 创建一个express实例
const express = require('express');
const app = express();

// 导入vue
const Vue = require('vue');

// 创建渲染器
const { createRenderer } = require('vue-server-renderer');

const renderer = createRenderer();

// 路由：问题2: 由express在管理
app.get('/', async (req, res) => {
  // 构建渲染页面内容
  // 问题1: 没办法交互
  // 问题3: 同构开发问题
  const vm = new Vue({
    data() {
      return {
        name: '村长真棒'
      }
    },
    template: '<div>{{name}}</div>'
  })

  try {
    // 渲染:得到html字符串
    const html = await renderer.renderToString(vm);
    // 发送回前端
    res.send(html)
  } catch (error) {
    res.status(500).send('服务端内部错误');
  }
})

// 监听端口
app.listen(3000);
