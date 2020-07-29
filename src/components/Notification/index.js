

import React, { useState } from 'react'
import Styled from "styled-components"
const Cardwrapper = Styled.div`
position: fixed;
right: 50%;
left: 60%;
bottom: 15px;
display: flex;
z-index: 30;
width: 300px;
height: 50px;
align-items: center;
justify-content: center;
background-color: #00000073;
.db-modal-wrapper {
    overflow: auto;
    position: relative;
    // margin-top: 10%;
    background-color: ${props => props.color};
    border-radius: 8px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
    width: 100%;
    height: 100%;
    .modal-main-block {
        font-size: 16px;
        padding: 17px;
        text-align: center;
        color: white;
    }
}
`
export default function Notification(props) {

    const [show, setShow] = useState(props.show)
    // console.log(info)
    const { info } = props
    info && Object.keys(info).length === 2 && setTimeout(function () {
        setShow(false)
    }, 3000)
    return (
        show ? <Cardwrapper color={info.type === 'error' ? 'red' : 'green'}>
            <div className='db-modal-wrapper '>
                <div className='modal-main-block'>
                    {info && info.msg}
                </div>
            </div>
        </Cardwrapper>
            : ''
    )
}
