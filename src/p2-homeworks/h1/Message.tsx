import React from 'react'
import styles from './Message.module.css';
import {MessagePropsType} from "./HW1";

type PropsType = {
   messageData: MessagePropsType
}

const Message = (props: PropsType) => {
    const { message, name, avatar, time} = props.messageData
    return (
        <div className={styles.container}>
            <div className={styles.ava}>
                <img src={avatar} alt="ava"/>
            </div>
            <div className={styles.message}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.texts}>
                    <span className={styles.text}>{message}</span>
                    <span className={styles.time}>{time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
