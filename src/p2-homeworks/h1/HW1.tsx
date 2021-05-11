import React from 'react'
import Message from "./Message";
import avatar1 from './image/ava1.jpg'
import avatar2 from './image/ava2.jpg'
import AlternativeMessage from './AlternativeMessage';

const messageData = {
    avatar: avatar1,
    name: 'Mike',
    message: `Hello! <br> How are you?`,
    time: '22:52',
}
const alternativeMessageData = {
    avatar: avatar2,
    name: 'Nick',
    message: `Hello! <br> Not bad! <br> What about you?`,
    time: '23:45',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}/>
            <hr/>
        </div>
    )
}

export default HW1
