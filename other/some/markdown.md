# markdown 流程图语法介绍

使用 [flowchart.js](http://flowchart.js.org/) 进行流程图渲染，它是一款将文本表达式绘制为简单的 svg 流程图的图形库
流程图代码块和语法高亮类似，不过类型声明须用 flow 关键字

流程图语法分两个部分，一个是声明元素，一个是定义流程

## 声明元素

> tag=>type: content :>url

- tag 设置元素名称
- => 元素定义符
- type: 设置元素类型，共分 6 种：
- start：开始，圆角矩形
- end：结束，圆角矩形
- operation：操作/行动方案，普通矩形
- subroutine：子主题/模块，双边线矩形
- condition：条件判断/问题审核，菱形
- inputoutput：输入输出，平行四边形
- content 设置元素显示内容，中英均可
- :>url 设置元素连接，可选，后接 [blank] 可以新建窗口打开

提示：注意空格，=> 前后都不能接空格；type: 后必须接空格；:> 是语法标记，中间不能有空格

## 定义流程

> tag1(branch,direction)->tag2

-> 流程定义符，连接两个元素
branch 设置 condition 类型元素的两个分支，有 yes/no 两个值，其他元素无效
direction 定义流程走线方向，有 left/right/top/bottom 四个值，所有元素有效，此项配置可选
（PS: 此属性目前有一定几率触发图形错位，刷新即可）
小提示：

继续注意空格，-> 前后都不能有空格
由于 condition 类型有两个分支，我们一般遇到 condition 元素就换行书写，比如：

> st->op1-c2
> c2(yes)->io->e
> c2(no)->op2->e

**单 readme.md 页面没什么问题，但是如果是 docsify 这种多页面的就不行了，因为 vue 的那个 window 只能加载一次，或者还要想其它办法，重新渲染这个 flowcharts**

**这里也可以看一下<mark>[docsify](https://docsify.js.org/#/zh-cn/markdown?id=%e6%94%af%e6%8c%81-mermaid)</mark>官方的流程图配置，这个的问题就是如果使用了暗主题，那个连线就显示有问题，需要给个亮色的背景才能看清**

<mark>[mermaid 文档](https://mermaid-js.github.io/mermaid/#/)</mark>
