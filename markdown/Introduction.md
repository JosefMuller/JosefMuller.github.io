# 作品简介

## .svg 图标处理

``` js
// vue.config.js

config.module.rule('svg')
    .exclude.add(resolve("src/assets/icons"));

// 将 src/assets/icons 的所以 .svg 文件生成图标类名 // 后续 svg.vue 组件直接使用 

config.module.rule("icons")
    .test(/\.svg$/).include.add(resolve("src/assets/icons")).end()
    .use('svg-sprite-loader').loader('svg-sprite-loader').options({
        symbolId: 'icon-[name]'
    }).end()
```

``` html
<!-- svg.vue -->

<svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName"></use>
</svg>
```

``` js
// main.js

import Icon from '@/components/icons/svg.vue'

// 遍历指定的文件夹 // 文件路径、是否遍历文件子目录、匹配文件的正则

const fnImmport = require.context('./svg', false, /\.svg$/);
fnImmport.keys().map(fnImmport);
```

``` html
<div class="wrap-btn">
    <Icon icon-class="arrow_left" @click="switchImg(index-1)" class="left"></Icon>
    <Icon icon-class="arrow_rigth" @click="switchImg(index+1)" class="right"></Icon>
</div>
```

## vuex

``` js
import bulkImport from "@/utils/bulkImport"

const store = new Vuex.Store({
    // 导入 ./modules 文件夹下的所有模块
    modules: bulkImport(require.context("./modules", true, /\.js$/)),
    getters: {
        token: state => state.userInfo.token,
        // 用户角色列表
        roles: state => state.userInfo.roles,
        // 完整路由表
        routes: state => state.permission.routes
    }
})
```

## vue-router

1. constRoutes（通用路由）

``` js
// meta（title、icon、open、close）：用于导航菜单的自动生成（参数会传入 svg.vue 组件使用）
// meta（markdown）:用于指定markdown的文件路径，通过路由配置定义列表

export default [{
    path: "/home",
    component: () => import("@/pages/Home"),
    meta: {
        title: "首页",
        icon: "home"
    }
}, {
    path: "/tools",
    component: () => import("@/layout/DoubleColumn"),
    meta: {
        title: "工具",
        open: "folder_open",
        close: "folder_close"
    },
    children: [{
        path: "FolderToJson",
        components: {
            aside: () => import("@/pages/Tools/Aside"),
            content: () => import("@/pages/Tools/FolderToJson")
        },
        meta: {
            title: "文件目录生成",
            file: "file"
        }
    }]
}, {
    path: "/learning",
    component: () => import("@/layout/DoubleColumn"),
    meta: {
        title: "Markdown",
        open: "folder_open",
        close: "folder_close"
    },
    children: [{
        path: "",
        components: {
            aside: () => import("@/pages/Learning/Aside")
        }
    }, ...markdown] // 自动配置 markdown 相关路由
}];
```

2. asyncRoutes（异步路由）

``` js
const whiteList = ["/login"] // 白名单

router.beforeEach(async (to, from, next) => {
    if (store.getters.token) {
        if (to.path === '/login') {
            next(from.fullPath);
        } else {
            const hasRoles = store.getters.roles && store.getters.roles.length > 0;
            if (!hasRoles) {
                const userInfo = await store.dispatch("userInfo/get");
                const asyncRoutes = await store.dispatch("permission/generateRoutes", userInfo.roles);
                router.addRoutes(asyncRoutes); // 根据用户角色生成可访问路由
                next({
                    ...to,
                    replace: true
                })
            } else {
                next();
            }
        }
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next("/login?redirect=" + to.path);
        }
    }
})
```

## Markdown 组件

``` html
<template>
    <section class="MarkdownConfig YetAnotherGithub" v-html="markdown"></section>
</template>
```

``` js
computed: {
    markdown() {
        return this.readMarkdownFile(this.$route.meta.markdown)
    },
},
```

## vue-directive

1. index.js（自动导入全局指令）

``` js
import bulkImport from "@/utils/bulkImport"
const directives = bulkImport(require.context("./global", true, /\.js$/));

export default {
    install(Vue) {
        Object.keys(directives).forEach(key => Vue.directive(key, directives[key]));
    }
}
```

2. 示例

``` html
<!-- v-emoji：限制可输入字符 -->

<section class="">
    <input type="text" v-model="username" placeholder="请输入用户名" v-emoji />
    <input type="password" v-model="password" placeholder="请输入密码" v-emoji />
    <button @click="login">登录</button>
</section>
```

``` html
<!-- v-copy：点击即可复制相应内容 -->

<p class="pointer" title="点击复制邮箱地址" v-copy="'572680934@qq.com'">E-mail：572680934@qq.com（复制）</p>
```

``` html
<!-- v-roles：根据仓库存储的用户角色对页面进行更精细的控制 -->

<section>
    <button v-roles="['admin']">admin button</button>
    <button v-roles="['admin','editor']">editor button</button>
</section>
```

## scss

``` js
// main.js

import '@/styles/index.scss' // global css
```

``` scss
// index.scss

@import "./flex.scss"; 

body {
    line-height: 1.4;
    color: #333;
    font-family: arial;
    font-size: 12px;
    background-color: whitesmoke;
}

input,
textarea,
select {
    font-size: 12px;
    font-size: 100%;
    font-family: arial;
    font-family: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
form {
    margin: 0;
}

h4,
h5,
h6 {
    font-size: 1em;
}

ul,
ol {
    padding-left: 0;
    list-style-type: none;
}

img {
    border: 0;
}
```

``` scss
// flex.scss
.set-flex {
    display: flex;

    &._wrap {
        flex-wrap: wrap;
    }

    &._nowrap {
        flex-wrap: nowrap;
    }

    &._row {
        flex-direction: row;
    }

    &._column {
        flex-direction: column;
    }

    &._around {
        justify-content: space-around;
    }

    &._center {
        justify-content: center;
    }

    &._between {
        justify-content: space-between;
    }

    &._start {
        align-items: flex-start;
    }

    &._middle {
        align-items: center;
    }

    &._end {
        align-items: flex-end;
    }

    &._self_start {
        align-self: flex-start;
    }

    &._self_end {
        align-self: flex-end;
    }

    &._self_center {
        align-self: center;
    }

    &._self_baseline {
        align-self: baseline;
    }

    &._self_stretch {
        align-self: stretch;
    }
}
```
