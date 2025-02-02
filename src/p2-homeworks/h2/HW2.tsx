import React, {useState} from 'react'
import Affairs from './Affairs'
import AlternativeAffairs from "./AlternativeAffairs";

// types
export type AffairPriorityType = 'low' | 'middle' | 'high' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} // need to fix any
export type AlternativeAffairType = {
    _id: number
    name: string
    deadline: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType
export type SortType = 'name' | 'deadline'

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Anime', priority: 'low'},
    {_id: 3, name: 'Games', priority: 'low'},
    {_id: 4, name: 'Work', priority: 'high'},
    {_id: 5, name: 'HTML & CSS', priority: 'middle'},
]

const alternativeDefaultAffairs: Array<AlternativeAffairType> = [ // need to fix any
    {_id: 1, name: 'React', deadline: '07/05/2021', priority: 'high'},
    {_id: 2, name: 'Anime', deadline: '10/13/2021', priority: 'low'},
    {_id: 3, name: 'Games', deadline: '05/20/2021', priority: 'low'},
    {_id: 4, name: 'Work', deadline: '04/06/2021', priority: 'high'},
    {_id: 5, name: 'HTML & CSS', deadline: '11/26/2021', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    else return [...affairs].filter(value => value.priority === filter) // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(value => value._id !== _id)// need to fix
}
export const filterAlternativeAffairs = (affairs: Array<AlternativeAffairType>, filter: FilterType): Array<AlternativeAffairType> => {
    if (filter === 'all') return affairs
    else return [...affairs].filter(value => value.priority === filter)
}
export const sortAlternativeAffairs = (affairs: Array<AlternativeAffairType>, sort: SortType): Array<AlternativeAffairType> => {
    if (sort === 'name')
        return [...affairs].sort((a, b) => {
            if (a.name > b.name) return 1
            else return -1

        })
    else return [...affairs].sort((a, b) => {
        let date1 = new Date(a.deadline)
        let date2 = new Date(b.deadline)
        if (date1 > date2) return 1
        else return -1
    })

}

export const deleteAlternativeAffair = (affairs: Array<AlternativeAffairType>, _id: number): Array<AlternativeAffairType> => {
    return affairs.filter(value => value._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [alternativeAffairs, setAlternativeAffairs] = useState<Array<AlternativeAffairType>>(alternativeDefaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const [filterAlternative, setFilterAlternative] = useState<FilterType>('all')
    const [sortAlternative, setSortAlternative] = useState<SortType>('name')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    const filteredAlternativeAffairs = filterAlternativeAffairs(alternativeAffairs, filterAlternative)
    const sortedAlternativeAffairs = sortAlternativeAffairs(filteredAlternativeAffairs, sortAlternative )
    const deleteAlternativeAffairCallback = (_id: number) => setAlternativeAffairs(deleteAlternativeAffair(alternativeAffairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeAffairs
                data={sortedAlternativeAffairs}
                setFilter={setFilterAlternative}
                setSort={setSortAlternative}
                deleteAffairCallback={deleteAlternativeAffairCallback}/>
            <hr/>
        </div>
    )
}

export default HW2
