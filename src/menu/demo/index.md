## 示例
### 基本形式

<div class="m-example"></div>

```xml
<menu>
    <item><a href="#">CSS元件</a></item>
    <item><a href="#">CSS模块</a></item>
    <item><a href="#">JS元件</a></item>
    <item><a href="#">JS模块</a></item>
</menu>
```

### 禁用某一项

<div class="m-example"></div>

```xml
<menu>
    <item><a href="#">CSS元件</a></item>
    <item><a href="#">CSS模块</a></item>
    <item disabled><a>JS元件</a></item>
    <item disabled><span>JS模块</span></item>
</menu>
```

### 分割线

<div class="m-example"></div>

```xml
<menu>
    <item><a href="#">CSS元件</a></item>
    <item><a href="#">CSS模块</a></item>
    <item divider />
    <item disabled><a href="#">JS元件</a></item>
    <item><a href="#">JS模块</a></item>
</menu>
```

### 多级菜单

<div class="m-example"></div>

```xml
<menu>
    <item><a href="#">CSS元件</a></item>
    <item class="z-more">
        <a>CSS模块</a>
        <menu>
            <item><a>导航类</a></item>
            <item><a>文章类</a></item>
            <item><a>布局类</a></item>
        </menu>
    </item>
    <item divider />
    <item class="z-more" disabled>
        <a>JS元件</a>
        <menu>
            <item><a>导航类</a></item>
            <item><a>表单类</a></item>
            <item><a>日期类</a></item>
        </menu>
    </item>
    <item class="z-more">
        <a>JS模块</a>
        <menu>
            <item class="z-more">
                <a>导航类</a>
                <menu>
                    <item><a>选项卡</a></item>
                    <item><a>折叠面板</a></item>
                    <item><a>分页器</a></item>
                    <item><a>步骤条</a></item>
                </menu>
            </item>
            <item class="z-more">
                <a>窗口类</a>
                <menu>
                    <item><a>通知</a></item>
                    <item><a>模态框</a></item>
                    <item><a>窗口</a></item>
                </menu>
            </item>
            <item class="z-more">
                <a>数据类</a>
                <menu>
                    <item><a>列表视图</a></item>
                    <item><a>树型视图</a></item>
                    <item><a>多选树型视图</a></item>
                </menu>
            </item>
            <item><a>日期类</a></item>
        </menu>
    </item>
</menu>
```

### 与Overlay结合

<div class="m-example"></div>

```xml
<overlay>
    <overlay.head><a class="u-btn u-btn-primary">菜单</a></overlay.head>
    <overlay.body>
        <menu>
            <item><a href="#">CSS元件</a></item>
            <item><a href="#">CSS模块</a></item>
            <item divider />
            <item disabled><a href="#">JS元件</a></item>
            <item><a href="#">JS模块</a></item>
        </menu>
    </overlay.body>
</overlay>
<overlay>
    <overlay.head><a class="u-btn u-btn-info">多级菜单</a></overlay.head>
    <overlay.body>
        <menu>
            <item><a href="#">CSS元件</a></item>
            <item class="z-more">
                <a>CSS模块</a>
                <menu>
                    <item><a>导航类</a></item>
                    <item><a>文章类</a></item>
                    <item><a>布局类</a></item>
                </menu>
            </item>
            <item divider />
            <item class="z-more" disabled>
                <a>JS元件</a>
                <menu>
                    <item><a>导航类</a></item>
                    <item><a>表单类</a></item>
                    <item><a>日期类</a></item>
                </menu>
            </item>
            <item class="z-more">
                <a>JS模块</a>
                <menu>
                    <item class="z-more">
                        <a>导航类</a>
                        <menu>
                            <item><a>选项卡</a></item>
                            <item><a>折叠面板</a></item>
                            <item><a>分页器</a></item>
                            <item><a>步骤条</a></item>
                        </menu>
                    </item>
                    <item class="z-more">
                        <a>窗口类</a>
                        <menu>
                            <item><a>通知</a></item>
                            <item><a>模态框</a></item>
                            <item><a>窗口</a></item>
                        </menu>
                    </item>
                    <item class="z-more">
                        <a>数据类</a>
                        <menu>
                            <item><a>列表视图</a></item>
                            <item><a>树型视图</a></item>
                            <item><a>多选树型视图</a></item>
                        </menu>
                    </item>
                    <item><a>日期类</a></item>
                </menu>
            </item>
        </menu>
    </overlay.body>
</overlay>
```
