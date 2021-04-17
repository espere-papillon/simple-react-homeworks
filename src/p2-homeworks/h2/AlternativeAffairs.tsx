import React from 'react'
import {AffairType, AlternativeAffairType, FilterType} from "./HW2";
import styles from "./Affairs.module.css";
import AlternativeAffair from "./AlternativeAffair";

type AlternativeAffairPropsType = {
    data: Array<AlternativeAffairType>
    setFilter: (filterAffairsValue: FilterType) => void
    deleteAffairCallback: (affairID: number) => void
}

function AlternativeAffairs(props: AlternativeAffairPropsType) {
    const mappedAlternativeAffairs = props.data.map((a: AlternativeAffairType, index) => (
        <ul className={styles.listCounter}>
            <AlternativeAffair
                key={a._id}
                counter = {++index}
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        </ul>
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div>
            {mappedAlternativeAffairs}

            <button className={styles.filterElementList} onClick={setAll}>All</button>
            <button className={styles.filterElementList} onClick={setHigh}>High</button>
            <button className={styles.filterElementList} onClick={setMiddle}>Middle</button>
            <button className={styles.filterElementList} onClick={setLow}>Low</button>
        </div>
    )
}

export default AlternativeAffairs
