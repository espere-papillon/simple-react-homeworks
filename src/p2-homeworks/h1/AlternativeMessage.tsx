import React from 'react'
import stylesAM from "./AlternativeMessage.module.css";

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: PropsType) {
    function createMarkup() {
        return {
            __html: props.message
        };
    };
    return (
        <div className={stylesAM.containerMessage}>
            <div className={stylesAM.message}>
                <h2 className={stylesAM.nameMessage}>{props.name}</h2>
                <h3 className={stylesAM.textMessage} dangerouslySetInnerHTML={createMarkup()} />
                <span className={stylesAM.timeMessage}>{props.time}</span>
            </div>
            <img className={stylesAM.avatar} src={props.avatar} alt="Ava"/>
        </div>
    )
}

export default AlternativeMessage
