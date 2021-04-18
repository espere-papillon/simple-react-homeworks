import React from 'react'
import {AlternativeAffairType} from "./HW2";
import styles from './Affairs.module.css'

type AlternativeAffairPropsType = {
    counter: number
    affair: AlternativeAffairType // need to fix any
    deleteAffairCallback: (affairID: number) => void // need to fix any
}

function AlternativeAffair(props: AlternativeAffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix

    const elementList = {
        backgroundColor: props.affair.priority === 'high' ? 'red' : props.affair.priority === 'middle' ? 'blue' : 'green'
    };
    const numberList = {
        backgroundColor: props.affair.priority === 'high' ? 'red' : props.affair.priority === 'middle' ? 'blue' : 'green'
    };

    return (
        <>
            <li style={elementList} className={styles.elementList}>
                <span style={numberList} className={styles.numberList}>{props.counter}</span>
                <span className={styles.textList}>{props.affair.name}</span>
                <span className={styles.deadlineList}>{props.affair.deadline}</span>
                {/*<span className={styles.priorityList}>{props.affair.priority}</span>*/}
            </li>
            <button className={styles.deleteElementList} onClick={deleteCallback}>X</button>
        </>
    )
}

export default AlternativeAffair
