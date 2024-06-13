# MessageCenter

<font size=4 face="微软雅黑">简介：这是钛米前端物料库中消息列表区块，可使用AppWorks进行引入</font>

## 配合导航区块使用
```jsx
import React from 'react'
// import MessageCenter from './src'
// import TmiNavigate from '../Navigate/src'
import { TmiNavigate, MessageCenter} from 'tmi-material';
export default () => {
	return <TmiNavigate>
		<MessageCenter />
	</TmiNavigate>
}
```
