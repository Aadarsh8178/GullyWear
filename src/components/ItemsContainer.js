import React, {useState } from 'react'

import Filter from './Filter';
import ItemsList from './ItemsList';
import Loading from './UI/Loading';
import Backdop from './UI/Backdrop';

const ItemsContainer = ({loading,sortedItems})=>{
    const [filterShow,setFilterShow] = useState(false);
    if(loading){
        return <Loading/>
    }
    const handlechange = ()=>{
        setFilterShow(prev => !prev)
    }
    return(
        <>
        {filterShow?<Backdop open onclick={handlechange}/>:<Backdop />}
        <div className="filter">{filterShow?<Filter/>:<p onClick={handlechange}>FILTER</p>}</div>
        <ItemsList Items={sortedItems} />
        <style jsx>{`
            .filter{
                position: sticky;
                top: 85px;
                padding-left:30px;
                padding-top:2px;
                padding-bottom:12px;
                z-index:11;    
            }
            .filter p{
                display:inline;
                font-family:GothamHTF-Book, sans-serif;
                color:rgb(70, 67, 67);
                font-size:13px;
                cursor:pointer;
                transition: all 0.2s ease-in-out;
            }
            .filter p:hover{
                font-weight:bold;
                font-size:14px;
                color:black;
            }
            @media screen and (max-width:768px)
            {
                .filter{
                    top:58px;
                    padding-left:18px;
                }
            }
            
        `}</style>
        </>
    )
}
export default ItemsContainer
