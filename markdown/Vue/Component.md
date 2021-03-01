#### 表单组件

* main.js（混入父链事件冒泡传递方法，解耦子父组件通信关系）

``` js
Vue.mixin({
    methods: {
        dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.__proto__.name
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent
                if (parent) {
                    name = parent.$options.componentName
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params))
            }
        }
    }
})
```

``` js
// 相关拓展（broadcast：子链事件穿透广播方法）
// 定义 broadcast 方法，接受三个参数，分别是：组件名称、将要触发的事件名称、回调函数传递的参数
function broadcast(componentName, eventName, params) {
    // 依次循环当前组件的子组件
    this.$children.forEach(child => {
        // 获取每个子组件的名字
        var name = child.$options.componentName;
        // 判断子组件的名字是否等于传入的组件名称
        if (name === componentName) {
            // 如果子组件的名字等于传入的组件名称就调用 $emit 触发事件
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // 如果子组件的名字不等于传入的组件名称就递归遍历调用 broadcast 孙子组件
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
```

* HelloWorld.vue（实际调用）

``` html
<template>
    <div class="hello">
        <V-form :model="model" :rules="rules" ref="loginForm">
            <V-form-item label="用户名：" prop="username">
                <V-input :value="model.username" @input="model.username = arguments[0]" placeholder="请输入用户名"></V-input>
            </V-form-item>
            <V-form-item label="密码：" prop="password">
                <V-input v-model="model.password" placeholder="请输入密码" type="password"></V-input>
            </V-form-item>
        </V-form>
        {{model}}
        <div>
            <button @click="onlogin">Login</button>
        </div>
    </div>
</template>

<script>
    import VForm from './form/V-form'
    import VFormItem from './form/V-form-item'
    import VInput from './form/V-input'

    export default {
        name: 'HelloWorld',
        components: {
            VForm,
            VFormItem,
            VInput,
        },
        data() {
            return {
                model: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [{
                        required: true,
                        message: '请输入用户名'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码'
                    }],
                },
            }
        },
        methods: {
            onlogin() {
                // 全局校验
                this.$refs['loginForm'].validate((isValid) => {
                    alert(isValid ? '登录成功' : '校验失败')
                })
            },
        },
    }
</script>
```

* V-form.vue（全局规则，全局校验）

``` html
<template>
    <section class="">
        <slot></slot>
    </section>
</template>
<script>
    export default {
        provide() {
            return {
                form: this,
            }
        },
        props: {
            model: {
                type: Object,
                required: true,
            },
            rules: {
                type: Object,
            },
        },
        components: {},
        data() {
            return {}
        },
        methods: {
            validate(cb) {
                // 全局校验
                // 1.不是所有的项都需要校验,把没有prop属性的过滤掉
                // 返回true就留下，执行留下数组中的所有校验方法，执行组件实例的validate方法，用map执行validate方法
                // tasks是一个promise的map执行结果数组
                const tasks = this.$children
                    .filter((item) => item.prop)
                    .map((item) => item.validate())
                // 必须全部通过,Promise.all结果数组全部通过才能执行then
                Promise.all(tasks)
                    .then(() => cb(true))
                    .catch(() => cb(false))
            },
        },
    }
</script>
```

* V-form-item.vue（局部验证，消息提示）

``` html
<template>
    <section class="">
        <label v-if="label" v-text="label"></label>
        <slot></slot>
    </section>
</template>
<script>
    import Schema from 'async-validator'

    export default {
        name: 'V-form-item',
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: '',
            },
            prop: {
                type: String,
                default: '',
            },
        },
        components: {},
        data() {
            return {}
        },
        methods: {
            validate() {
                // 1.获取值和校验方法
                const rules = this.form.rules[this.prop]
                const value = this.form.model[this.prop]
                // 2.创建Schema实例,格式： {username: rules}
                const schema = new Schema({
                    [this.prop]: rules
                })
                // 3.执行校验，校验对象, 回掉函数
                return schema.validate({
                    [this.prop]: value
                }, (errors) => {
                    if (errors) {
                        this.errorMsg = errors[0].message
                    } else {
                        this.errorMsg = ''
                    }
                })
            },
        },
        mounted() {
            this.$on('validate', () => {
                this.validate()
            })
        },
    }
</script>
```

* V-input.vue（数据绑定，事件传递）

``` html
<template>
    <section class="">
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </section>
</template>
<script>
    export default {
        inheritAttrs: false,
        props: {
            type: {
                type: String,
                default: 'text',
            },
            value: {
                type: String,
                default: '',
            },
        },
        components: {},
        data() {
            return {}
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value)
                this.dispatch('V-form-item', 'validate', e.target.value)
            },
        },
    }
</script>
```

#### 弹窗组件

``` js
// 调用方式
this.$alert({
    content: '登录成功',
})
```

``` html
<!-- 创建模板 @/components/alert/V-alert -->
<template>
    <section class="V-alert" v-if="isShow">
        <div class="title" v-text="title"></div>
        <div class="content" v-text="content"></div>
    </section>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Tips',
            },
            content: {
                type: String,
                default: 'Content',
            },
            duration: {
                type: Number,
                default: 1500,
            },
        },
        components: {},
        data() {
            return {
                isShow: false,
            }
        },
        methods: {
            show() {
                this.isShow = true
                setTimeout(this.hide, this.duration)
            },
            hide() {
                this.isShow = false
                this.remove()
            },
        },
        mounted() {
            this.show()
        },
    }
</script>
<style lang="scss" scoped>
    .V-alert {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 30%;
        background-color: beige;

        .title {
            background-color: cornflowerblue;
            height: 20%;
            display: flex;
            justify-content: start;
            align-items: center;
            padding: 0 5%;
        }

        .content {
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
```

``` js
// 插件实现 ./utils/createAlert

import Vue from 'vue'
import VAlert from '@/components/alert/V-alert'

function createAlert(component, props) {
    const vm = new Vue({
        render: h => h(component, {
            props
        })
    }).$mount(); // 不指定宿主元素，则会创建真实dom，但是不会追加操作

    document.body.appendChild(vm.$el);

    const comp = vm.$children[0];
    comp.remove = function() {
        document.body.removeChild(vm.$el)
        vm.$destroy();
    }

    return comp;
}

export default {
    install(Vue) {
        Vue.prototype.$alert = function(options) {
            return createAlert(VAlert, options);
        }
    }
}
```

``` js
// 插件安装
import create from './utils/createAlert'
Vue.use(create)
```

#### 路由组件

#### 仓库组件
