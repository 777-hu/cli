import React from 'react';
import { Button } from 'antd';
import {
	CheckOutlined
  } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './index.scss';

const cardDataList = [
  {
    id: '2023220001',
    createUsername: '张三',
    createdTime: '2023-4-6 14:20',
    patientName: [
      {
        jobStatus: 'Completed',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'InProcess',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
    ]
  },
  {
    id: '2023220001',
    createUsername: '张三',
    createdTime: '2023-4-6 14:20',
    patientName: [
      {
        jobStatus: 'Completed',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'InProcess',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
      {
        jobStatus: 'Scheduled',
        patientName: '李依依之女'
      },
    ]
  }
]

const CardList = (props) => {
	const { dataList = cardDataList } = props

	// 进入探视页面
	const goVisitPage = (id) => {
		console.log(id)
	}

	return (
		<div className='cardList'>
		{
			dataList.length > 0?
			dataList.map((item, index) => {
				return (
					<div key={index} className="cardList_box">
						{/* 头部 */}
						<div className="cardList_box_msg">
							<div className="cardList_box_babyMsg">
								<span>任务号：{item.id}</span>
								<span>创建人：{item.createUsername}</span>
								<span>创建时间：{item.createdTime}</span>
							</div>
							<Button type="primary" text className="cardList_box_babyChack" onClick={()=> goVisitPage(item.id)}>进入探视</Button>
						</div>
						{/* 中间 */}
						<div className="cardList_box_line"></div>
						{/* 尾部 */}
						<div className="cardList_box_footer">
							{
								item.patientName?.length > 0? 
								item.patientName.map((tip, index) => {
									return (
										<div key={index} className="cardList_box_babyName">
											{
												tip.jobStatus === 'Completed' ? 
												<div className="cardList_box_babyCompleted">
													{/* <img className="cardList_box_rightImg" src={RIGHT}></img> */}
													<CheckOutlined className="cardList_box_rightImg"/>
												</div>
												:
												tip.jobStatus === 'InProcess' ?
												<div className="cardList_box_babyInprogress">{index+1}</div>
												:
												<div className="cardList_box_babyIndex">{index+1}</div>
											}
											<div className="cardList_box_patientName">{tip.patientName}</div>
											{
												item.patientName.length === index+1 ? '' : <div className={`cardList_box_nextLine ${tip.jobStatus === 'Completed' ? 'completed' : ''}`}></div>
											}
										</div>
									)
								})
								:
								<div>暂无患者数据</div>
							}
						</div>
					</div>
				)
			})
			:
			<div>暂无患者数据</div>
		}
		</div>
	)
}

CardList.propTypes = {
  value: PropTypes.string,
};

CardList.defaultProps = {
  value: '',
};

export default CardList
