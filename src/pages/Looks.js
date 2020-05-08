import React,{useContext} from 'react'

import {LookContext} from '../store/context'
import ItemsContainer from '../components/Items/ItemsContainer'
const Looks = () => {
    const context = useContext(LookContext)
    const {loading,sortedLooks,looks} = context;
    return (
            <ItemsContainer loading={loading} sortedItems={sortedLooks}/>
    )
}

export default Looks
