#### CSS 优先级

内联 > ID选择器（出现的次数） > 类选择器, 属性选择器, 伪类（出现的总次数） > 标签选择器，伪元素（出现的总次数）

#### link 与 @import

* link属于XHTML标签，⽽@import是CSS提供的。
* ⻚⾯被加载时，link会同时被加载，⽽@import引⽤的CSS会等到⻚⾯被加载完再加载。
* import只在IE 5以上才能识别，⽽link是XHTML标签，⽆兼容问题。
* link⽅式的样式权重⾼于@import的权重。
* 使⽤dom控制样式时的差别。当使⽤javascript控制dom去改变样式的时候，只能使⽤link标签，因为@import不是dom可以控制的。

#### 隐藏⻚⾯元素

* opacity:0 ：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互
* visibility:hidden : 与上⼀个⽅法类似的效果，占据空间，但是不可以交互了
* overflow:hidden : 这个只隐藏元素溢出的部分，但是占据空间且不可交互
* display:none : 这个是彻底隐藏了元素，元素从⽂档流中消失，既不占据空间也不交互，也不影响布局
* z-index:-9999 : 原理是将层级放到底部，这样就被覆盖了，看起来隐藏了
* transform: scale(0, 0) : 平⾯变换，将元素缩放为0，但是依然占据空间，但不可交互

#### em\px\rem

* px：绝对单位，⻚⾯按精确像素展示。
* em：相对单位，基准点为⽗节点字体的⼤⼩，如果⾃身定义了font-size按⾃身来计算（浏览器默认字体是
* 16px），整个⻚⾯内1em不是⼀个固定的值。
* rem：相对单位，可理解为”root em”, 相对根节点html的字体⼤⼩来计算，CSS3新加属性，chrome/firefox/IE9+⽀持

#### 元素居中

* margin

``` html
<head>
    <style>
        .center {
            height: 200px;
            width: 200px;
            /* margin：根据正常文档流进行计算，例如absolute、inline-block时，auto将不会生效 */
            margin: 0 auto;
            border: 1px solid red;
        }
    </style>
</head>

<body>
    <div class="center">⽔平居中</div>
</body>
```

* felx

``` html
<head>
    <style>
        .center {
            display: flex;
            justify-content: center;
        }
    </style>
</head>

<body>
    <div class="center">
        <div class="flex-div">1</div>
        <div class="flex-div">2</div>
    </div>
</body>
```

* table

``` html
<head>
    <style>
        .center {
            display: table;
            margin: 0 auto;
            border: 1px solid red;

        }
    </style>
</head>

<body>
    <div class="center">⽔平居中</div>
</body>
```

* ::after

``` html
<head>
    <style>
        .parent {
            height: 200px;
            text-align: center;
        }

        .parent::after,
        .son {
            display: inline-block;
            vertical-align: middle;
        }

        .parent::after {
            content: '';
            height: 100%;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="son">123</div>
    </div>
</body>
```

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>::after垂直居中原理示意图（相对行内基线居中对齐）</title>
    <style>
        body {
            margin: 0;
        }

        section {
            width: 300px;
            margin: 50px 0;
            border: 1px solid black;
        }

        .box {
            display: inline-block;
        }

        .left {
            width: 25px;
            height: 25px;
            background-color: cornflowerblue;
        }

        .right {
            width: 50px;
            height: 50px;
            background-color: slateblue;
        }
    </style>
    <script>
        window.onload = function() {
            console.log("标准规定，基线的位置在小写字母x的底部所在直线的位置");
            console.log("倘若文本也应用垂直居中，实际上并不是整体居中，但视觉上会比较合理")
        }
    </script>
</head>

<body>
    <section>
        <span>文本参照物 - x</span>
        <div class="box left"></div>
        <div class="box right"></div>
    </section>
    <section>
        <span>Left 对齐了 - x</span>
        <div class="box left" style="vertical-align: middle;"></div>
        <div class="box right"></div>
    </section>
    <section>
        <span>Right 对齐 - x</span>
        <div class="box left" style="vertical-align: middle;"></div>
        <div class="box right" style="vertical-align: middle;"></div>
    </section>
    <section>
        <span style="vertical-align: middle;">文本对齐了 - x</span>
        <div class="box left" style="vertical-align: middle;"></div>
        <div class="box right" style="vertical-align: middle;"></div>
    </section>
</body>

</html>
```

#### 元素定位

* static: 正常⽂档流定位，此时 top, right, bottom, left 和 z-index 属性⽆效，

  块级元素从上往下纵向排布，⾏级元素从左向右排列。

* relative：相对定位，此时的『相对』是相对于正常⽂档流的位置。
* absolute：相对于最近的⾮ static 定位祖先元素的偏移，来确定元素位置，

  ⽐如⼀个绝对定位元素它的⽗级、和祖⽗级元素都为relative，它会相对他的⽗级⽽产⽣偏移。

* fixed：指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。

  元素的位置在屏幕滚动时不会改变，⽐如那种回到顶部的按钮⼀般都是⽤此定位⽅式。

* sticky：粘性定位，特性近似于relative和fixed的合体，

  其在实际应⽤中的近似效果就是IOS通讯录滚动的时候的『顶屁股』。

#### 清除浮动

* 空div⽅法

``` html
<div style="clear:both; ">\</div>
```

* Clearfix ⽅法

``` HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin: 0;
            background-color: ghostwhite;
        }

        .box {
            width: 100px;
            height: 100px;
            float: left;
        }

        .box1 {
            background-color: cornflowerblue;
        }

        .box2 {
            background-color: cadetblue;
        }

        .clearfix:after {
            display: block;
            content: "";
            clear: both;
        }
    </style>
</head>

<body>
    <section class="clearfix">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
    </section>
</body>

</html>
```

* overflow（BFC）

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin: 0;
            background-color: ghostwhite;
        }

        .box {
            width: 100px;
            height: 100px;
            float: left;
        }

        .box1 {
            background-color: cornflowerblue;
        }

        .box2 {
            background-color: cadetblue;
        }

        .BFC {
            overflow: auto;
        }
    </style>
</head>

<body>
    <section class="BFC">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
    </section>
</body>

</html>
```

#### BFC

* 简⽽⾔之，它是⼀块独⽴的区域，让处于BFC内部的元素与外部的元素互相隔离
* BFC触发条件:
  + 根元素，即HTML元素
  + position: fixed/absolute
  + float 不为none
  + overflow不为visible
  + display的值为inline-block、table-cell、table-caption
* 作用（防止元素塌陷、防止文字环绕、防止margin重叠）

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>双栏布局</title>
    <style>
        body {
            margin: 0;
            background-color: ghostwhite;
        }

        .left {
            width: 100px;
            height: 100px;
            float: left;
            background-color: cornflowerblue;
        }

        .right {
            background-color: cadetblue;
            height: 200px;
        }

        .BFC {
            overflow: hidden;
        }
    </style>
</head>

<body>
    <section>
        <div class="left"></div>
        <div class="right BFC"></div>
    </section>
</body>

</html>
```

#### css sprites

雪碧图也叫CSS精灵， 是⼀CSS图像合成技术，开发⼈员往往将⼩图标合并在⼀起之后的图⽚称作雪碧图。

* 好处：

  + 减少加载多张图⽚的 HTTP 请求数（⼀张雪碧图只需要⼀个请求）
  + 提前加载资源

* 不⾜：
  + CSS Sprite维护成本较⾼，如果⻚⾯背景有少许改动，⼀般就要改这张合并的图⽚
  + 加载速度优势在http2开启后荡然⽆存，HTTP2多路复⽤，多张图⽚也可以重复利⽤⼀个连接通道搞定

#### 媒体查询

媒体查询由⼀个可选的媒体类型和零个或多个使⽤媒体功能的限制了样式表范围的表达式组成，例如宽度、⾼度和颜
⾊。媒体查询，添加⾃CSS3，允许内容的呈现针对⼀个特定范围的输出设备⽽进⾏裁剪，⽽不必改变内容本身, ⾮常适
合web⽹⻚应对不同型号的设备⽽做出对应的响应适配。

#### 盒子模型

* box-sizing: content-box // 标准盒模型（设置宽度后，实际宽度还将根据pading进行改变）
  + 元素的宽度 = margin-left + border-left + padding-left + width + padding-right + border-right + margin-right
* box-sizing: border-box // 怪异盒模型（设置宽度后可以固定实际宽度）
  + 元素占据的宽度 = margin-left + width + margin-right
* box-sizing: padding-box // ⽕狐的私有模型，没⼈⽤

#### 伪类 和 伪元素

* 伪类（pseudo-class） 是⼀个以冒号(:)作为前缀，被添加到⼀个选择器末尾的关键字，

  当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后⾯加上对应的伪类。

* 伪元素⽤于创建⼀些不在⽂档树中的元素，并为其添加样式。⽐如说，我们可以通过::before

  来在⼀个元素前增加⼀些⽂本，并为这些⽂本添加样式。虽然⽤户可以看到这些⽂本，但是这些⽂本实际上不在⽂档树中。

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>伪类 和 伪元素</title>
    <style>
        body {
            margin: 0;
            background-color: ghostwhite;
        }

        section {
            width: 200px;
            height: 200px;
            background-color: cornflowerblue;
            text-align: center;
            border-radius: 50%;
        }

        section::before,
        section::after {
            /* 先将 ::after 和 需要垂直居中的元素 设置为行间块级元素 */
            /* 我们希望让 ::after 的高度和容器保持一致 */
            /* 然后我们就可以 需要垂直居中的元素 进行行间元素中心对齐，以此实现垂直居中 */
            display: inline-block;
            vertical-align: middle;
        }

        section::before {
            content: "";
            background-color: ghostwhite;
        }

        section::after {
            content: '';
            height: 100%;
        }

        section:hover:before {
            animation: milk .5s linear;
            animation-fill-mode: forwards;
        }

        @keyframes milk {
            0% {
                width: 0;
                height: 0;
                opacity: 0;
                border-radius: 50%;
            }

            70% {
                width: 140px;
                height: 140px;
                border-radius: 50%;
            }

            100% {
                width: 140px;
                height: 140px;
                opacity: 1;
                border-radius: 20%;
            }
        }
    </style>
</head>

<body>
    <section></section>
</body>

</html>
```

#### translate 和 position

translate()是transform的⼀个值。
改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），
只会触发复合（compositions）。⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。
transform使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 
因此translate()更⾼效，可以缩短平滑动画的绘制时间。
⽽translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。
