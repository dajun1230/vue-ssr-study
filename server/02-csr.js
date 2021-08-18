const express = require("express");
const app = express();

app.get("/", function (req, res) {
  const html = `
    <div id="app">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          title: '开课吧',
          content: '开课吧还不错'
        }
      })
    </script>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("启动成功");
});
