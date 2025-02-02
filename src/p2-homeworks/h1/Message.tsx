import React from 'react'
import stylesM from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    function createMarkup() {
        return {
            __html: props.message
        };
    };

    return (
        <div className={stylesM.containerMessage}>
            <img className={stylesM.avatar} src={props.avatar} alt="Ava"/>
            <div className={stylesM.message}>
                <h2 className={stylesM.nameMessage}>{props.name}</h2>
                <h3 className={stylesM.textMessage} dangerouslySetInnerHTML={createMarkup()} />
                <span className={stylesM.timeMessage}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
