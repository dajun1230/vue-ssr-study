import Vue from 'vue'
import App from './App.vue';
import { createRouter } from './router';

Vue.config.productionTip = false

// 导出vue实例工厂函数，为每次请求创建独立实例
// 上下文用于给vue实例传递参数
// 每个请求返回一个Vue实例
export function createApp(context) {
  const router = createRouter();
  const app = new Vue({
    router,
    context, // 用于和外面renderer交互
    render: h => h(App),
  });

  return { app, router }
}
