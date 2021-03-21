import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: MessagePropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text some text some text some text some text some text some text ',
    time: '22:00',
}
const messageData2: MessagePropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text some  some text some text some text some text some text some text some text some text some text some text some text some text some text ',
    time: '23:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}
            <Message
                messageData={messageData}

            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                messageData={messageData2}
            />
            <hr/>
        </div>
    )
}

export default HW1
