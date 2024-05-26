import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "antd";
import { decremented, incremented } from '../../redux/reducers/testReducer';

const TestOne = () => {
    const { value } = useSelector(state => state.test)
    const dispatch = useDispatch()
    return (
        <div className='content'>
            test: { value }
            <Button style={{ width: 40 }} type="primary" onClick={() =>dispatch(incremented())}> + </Button>
            <Button style={{ width: 40 }} type="primary" onClick={() => dispatch(decremented())}>-</Button>
        </div>
    )
}

export default TestOne