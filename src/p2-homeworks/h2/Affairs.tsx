import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filterAffairsValue: FilterType) => void
    deleteAffairCallback: (affairID: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <ul className={styles.listCounter}>
            <Affair // should work
                key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        </ul>
    ))

    const setAll = () => props.setFilter('all') // need to fix
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div className={styles.form}>

            <div className={styles.allBtn}>
            <SuperButton onClick={setAll} className={styles.btn}>All</SuperButton>
            <SuperButton onClick={setHigh} className={styles.btn}>High</SuperButton>
            <SuperButton onClick={setMiddle} className={styles.btn}>Middle</SuperButton>
            <SuperButton onClick={setLow} className={styles.btn}>Low</SuperButton>
            </div>

            {mappedAffairs}

            {/*<button className={styles.filterElementList} onClick={setAll}>All</button>*/}
            {/*<button className={styles.filterElementList} onClick={setHigh}>High</button>*/}
            {/*<button className={styles.filterElementList} onClick={setMiddle}>Middle</button>*/}
            {/*<button className={styles.filterElementList} onClick={setLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
