# FormWithTitle

<font size=4 face="微软雅黑">简介：这是钛米前端物料库中Form表单区块，可使用命令create-tmi addComponent进行引入</font>

```jsx
import React from 'react'
import { FormWithTitle } from 'tmi-material';
export default () => <FormWithTitle />
```

## 配合导航区块使用
```jsx
import React from 'react'
import { FormWithTitle, TmiNavigate } from 'tmi-material';
export default () => <TmiNavigate >
	<FormWithTitle />
</TmiNavigate>
```