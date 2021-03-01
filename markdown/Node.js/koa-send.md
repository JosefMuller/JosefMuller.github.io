1、app.js相关文件引入

``` js
const koa = require('koa'); // "koa": "^2.2.0"
const app = new koa();
const router = require('koa-router')(); // "koa-router": "^7.2.0"
const send = require('koa-send'); // "koa-send": "^4.1.0"

router.get('/', async function(ctx) {
    var fileName = 'index.html';
    await send(ctx, fileName, {
        root: __dirname + '/public'
    });
});

router.get('/download', async function(ctx) {
    // 为了方便演示，这里直接下载index页面
    var fileName = 'index.html';
    // Set Content-Disposition to "attachment" to signal the client to prompt for download.
    // Optionally specify the filename of the download.
    // 设置实体头（表示消息体的附加信息的头字段）,提示浏览器以文件下载的方式打开
    // 也可以直接设置 ctx.set("Content-disposition", "attachment; filename=" + fileName);
    ctx.attachment(fileName);
    await send(ctx, fileName, {
        root: __dirname + '/public'
    });
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
```

2、测试页面代码: index.html

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>下载测试</title>
    <style>
        div {
            width: 100%;
            text-align: center;
            margin-top: 50px;
        }
    </style>
    <script>
        window.onload = function() {
            var oBtnDownload = document.getElementById('download');
            oBtnDownload.onclick = function() {
                window.open('http://localhost:3000/download', '_blank')
            }
        }
    </script>
</head>

<body>
    <div>
        <button id="download">点击下载</button>
    </div>
</body>

</html>
```

2、测试开始：浏览器打开http://localhost:3000/
