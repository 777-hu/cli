# Navigate

<font size=4 face="微软雅黑">简介：这是钛米前端物料库中导航区块，可使用create-tmi addComponent进行引入</font>

```jsx
import React from 'react'
import { TmiNavigate } from 'tmi-material';

export default () => <TmiNavigate />
```

## 基础样式classname用法及其含义
| 参数                                | 说明                                                                                 | 类型      | 默认值   |
|-------------------------------------|--------------------------------------------------------------------------------------|-----------|----------|
| `.content`                          | 主容器，设置了flex布局和相对定位等属性。                                                 | `class`   | 无       |
| `.content-tabs`                     | 设置了字体权重、大小和颜色的选项卡标题。                                                   | `class`   | 无       |
| `.common-form-header`               | 表单头部，设置了高度、内边距、边框、布局和对齐方式。                                           | `class`   | 无       |
| `.common-form-title`                | 表单标题，设置了字体权重、大小、行高和颜色。                                               | `class`   | 无       |
| `.common-form-title > span`         | 表单标题内的span元素，设置了左边距。                                                     | `element` | 无       |
| `.common-form-wrapper`              | 表单包装器，设置了布局、高度、内边距和对齐方式。                                             | `class`   | 无       |
| `.common-form-wrapper-many`         | 多表单包装器，设置了高度、内边距和垂直滚动。                                               | `class`   | 无       |
| `.common-table-header`              | 表头，设置了高度、内边距、布局、对齐方式和边框。                                             | `class`   | 无       |
| `.common-table-title`               | 表格标题，设置了字体权重、大小、行高和颜色。                                               | `class`   | 无       |
| `.common-table-buttons`             | 表格按钮容器，设置了flex布局和间距。                                                      | `class`   | 无       |
| `.common-table-button`              | 表格按钮，设置了布局、对齐方式、内边距、宽高、背景色、边框半径、字体权重、大小、行高和颜色。                | `class`   | 无       |
| `.common-table-wrapper`             | 表格包装器，设置了高度、垂直滚动和外边距。                                                 | `class`   | 无       |
| `.common-table-relevance`           | 表格关联容器，设置了flex布局、换行、间距和下边距。                                           | `class`   | 无       |
| `.common-table-relevance-search`    | 表格关联搜索，设置了宽度。                                                              | `class`   | 无       |
| `.common-table-batch`               | 表格批处理容器，设置了高度、背景色、边框、内边距、下边距、布局和对齐方式。                                | `class`   | 无       |
| `.common-table-batch-button`        | 表格批处理按钮，设置了颜色和光标样式。                                                    | `class`   | 无       |
| `.common-table-batch-button.cancel` | 表格批处理取消按钮，设置了左边距。                                                       | `class`   | 无       |
| `.FREE`                             | 自由状态颜色。                                                                      | `class`   | `#0FC6C2`|
| `.OCCUPY`                           | 占用状态颜色。                                                                      | `class`   | `#FF7D00`|
| `.ERROR`                            | 错误状态颜色。                                                                      | `class`   | `#F53F3F`|
| `.common-table-button-absolute`     | 绝对定位的表格按钮，设置了布局、对齐方式、内边距、高度、背景色、边框半径、字体权重、大小、行高、颜色、定位、右边距、上边距和z-index。| `class`   | 无       |
| `.common-table-button-absolute-no-color` | 无颜色的绝对定位表格按钮，设置了布局、对齐方式、内边距、高度、边框半径、字体权重、大小和行高。              | `class`   | 无       |
| `.ant-tabs-nav-list:first-child`    | 第一个ant-tabs导航列表项，设置了左边距。                                                   | `pseudo-class` | 无       |
