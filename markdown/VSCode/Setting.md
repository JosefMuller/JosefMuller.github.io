#### 插件安装

* All
  + VSCode Great Icons
* HTML
  + Beautify
  + Auto Close Tag
  + Auto Rename Tag
  + Live HTML Previewer
* Vue
  + Vetur
* Git
  + Git Easy
  + Git Blame
* Markdown
  + Markdown Preview Enhanced
  + Markdown Preview Mermaid Support
  + markdown-formatter

#### 相关配置（File > Preferences > Setting）

``` json
{
    "search.followSymlinks": false, // 解决 rg.exe CPU占用过高的问题
    /* ------ ------ ------ 显示配置 ------ ------ ------ */
    /* 界面区 */
    "window.zoomLevel": -2, // 窗口 缩放 或 扩大
    "window.menuBarVisibility": "toggle", // 隐藏文件菜单栏 // 快捷键：Alt
    "window.titleBarStyle": "custom", // 修改菜单栏主题以适应隐藏的文件菜单栏
    "window.title": "${activeEditorMedium}", // ${dirty}${activeEditorShort}${separator}  ${separator}${appName}
    /* 工作区 */
    "workbench.colorCustomizations": {
        "editorCursor.foreground": "#00ffff" // 光标颜色
    },
    "workbench.startupEditor": "newUntitledFile", // 表示打开新的无标题文档(仅打开一个空工作区)。
    "workbench.activityBar.visible": false, // 隐藏活动栏
    "workbench.sideBar.location": "left", // 侧边栏位置
    /* ------ ------ ------ 功能配置 ------ ------ ------ */
    /* 编辑区 */
    "editor.minimap.enabled": false, // 关闭右侧代码整体缩略图提示
    "editor.fontLigatures": true, // 启用连字符支持
    "editor.dragAndDrop": true, // 可拖拽
    "editor.formatOnSave": true, // 保存并格式化代码
    "editor.formatOnType": true, // 控制编辑器是否应在键入后自动设置行的格式
    "files.autoSave": "afterDelay", // 自动保存
    "files.autoSaveDelay": 3000,
    /* 代码提示 */
    "emmet.syntaxProfiles": { // 指定vue文件代码提示方式
        "vue": "html"
    },
    /* ------ ------ ------ 插件 ------ ------ ------ */
    /* VSCode Great Icons */
    "workbench.iconTheme": "vscode-great-icons", // 图标主题
    /* Beautify */
    "[javascript]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "[json]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "[html]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    /* Vetur */
    "vetur.format.scriptInitialIndent": true,
    "vetur.format.styleInitialIndent": true,
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            // #vue组件中html代码格式化样式
            "wrap_attributes": "auto", //也可以设置为“auto”，效果会不一样
            "wrap_line_length": 150,
            "end_with_newline": false,
            "semi": false,
            "singleQuote": false // 是否格式化成单引号
        },
        "prettier": {
            "semi": false,
            "singleQuote": true
        }
    },
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "prettier",
    "markdown-preview-enhanced.previewTheme": "newsprint.css",
    "markdown-preview-enhanced.codeBlockTheme": "pojoaque.css"
}
```

#### 快捷模板（File > Preferences > User Snapper）

* vue.json

``` json
{
    "Print to console": {
        "prefix": "vue",
        "body": [
            "<template>",
            "  <section class=\"\">",
            "  </section>",
            "</template>",
            "<script>",
            "  export default {",
            "    components: {},",
            "    data() {",
            "      return {}",
            "    },",
            "    methods: {},",
            "  }",
            "</script>",
            "<style lang=\"scss\" scoped>",
            "</style>"
        ],
        "description": "Vue for sass"
    }
}
```
