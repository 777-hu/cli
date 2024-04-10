import React, { useState } from 'react'
import MessageBox from 'tmirob-message-box'

let ZH = {
	Exceptions:'消息',
	'Clear All': '清空全部',
	Confirm: '详情',
	Help: '已读',
}

function MessageBoxContainer(props) {
	const { showHistory } = props
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	let handleDeleteAll=()=>{
		let params={
			roleList:author?.roleList,
			receiveWarehouseIdOrOperationId:author?.operationRoomId,
		}
		Dialog.show({
		  title: '确认提示',
		  content: '是否清空消息盒子?',
		  onOk: () =>actions.removeMessageAll(params),
		  onCancel:()=>{},
		  v2:true,
		  centered:true,
		});
	  }

	return (
		<>
			<MessageBox
				// messageQueue={messageQueue}
				// showHelp={this.handleShowHelp}
				// sendConfirm={this.sendConfirm}
				sendConfirmAll={()=>{handleDeleteAll()}}
				// goToHistory={this.goToHistory}
				toggleBox={toggleModal}
				showBox={showModal}
				// localize={localize}
				// showHistory={showHistory === false? showHistory: true}
				// showHistory={true}
				localize={(cell) => ZH[cell]}
			/>
		</>
	)
}

export default MessageBoxContainer