# AddInSituTable

<font size=4 face="微软雅黑">简介：这是钛米前端物料库中原位新增区块，可使用命令create-tmi addComponent进行引入</font>

```jsx
import React from 'react'
import { AddInSituTable } from 'tmi-material';
export default () => <AddInSituTable />
```
## 配合导航区块使用
```jsx
import React from 'react'
import { AddInSituTable, TmiNavigate } from 'tmi-material';
export default () => <TmiNavigate >
	<AddInSituTable />
</TmiNavigate>
```