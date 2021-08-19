import { createApp } from './main';

// 返回一个函数，接收请求上下文，返回创建的vue实例
// 将来和渲染器打交道
// 创建vue实例
export default context => {
  const { app, router } = createApp(context);

  // 这里返回一个Promise，确保路由和组件准备就绪
  return new Promise((resolve, reject) => {
    // 跳转到首屏地址去
    router.push(context.url);

    // 等待路由就绪，返回结果
    router.onReady(() => {
      resolve(app);
    }, reject)

  });
}
