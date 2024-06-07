import React, {useState} from "react";
import '../style/BtnItem.scss';

const BtnItem = (props) => {
    const { data } = props
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div onMouseEnter={() => {setIsHovered(true)}}
            onMouseLeave={() => {setIsHovered(false)}} 
            className='btnList'
            style={{background:isHovered?"#F5F5F5":'#fff'}}
        >{data}</div>
    )
}

export default BtnItem