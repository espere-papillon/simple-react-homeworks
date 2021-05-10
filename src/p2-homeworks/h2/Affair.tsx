import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (affairID: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
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
                <span style={numberList} className={styles.numberList}>{props.affair._id}</span>
                <span className={styles.textList}>{props.affair.name}</span>
                <span className={styles.deadlineList}>{props.affair.priority}</span>
            </li>
            {/*<button className={styles.deleteElementList} onClick={deleteCallback}>X</button>*/}
            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </>
    )
}

export default Affair
