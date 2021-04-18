import React from 'react'
import {AlternativeAffairType, FilterType, SortType} from "./HW2";
import styles from "./Affairs.module.css";
import AlternativeAffair from "./AlternativeAffair";

type AlternativeAffairPropsType = {
    data: Array<AlternativeAffairType>
    setFilter: (filterAffairsValue: FilterType) => void
    setSort: (sortAffairsValue: SortType) => void
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
    const setName = () => props.setSort('name')
    const setDeadline = () => props.setSort('deadline')

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div>
            <button className={styles.sortElementList} onClick={setName}>Name</button>
            <button className={styles.sortElementList} onClick={setDeadline}>Deadline</button>
            {mappedAlternativeAffairs}

            <button className={styles.filterElementList} onClick={setAll}>All</button>
            <button className={styles.filterElementList} onClick={setHigh}>High</button>
            <button className={styles.filterElementList} onClick={setMiddle}>Middle</button>
            <button className={styles.filterElementList} onClick={setLow}>Low</button>
        </div>
    )
}

export default AlternativeAffairs
