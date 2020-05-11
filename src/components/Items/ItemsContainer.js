import React, {useState,useContext} from 'react'

import Filter from '../Filter/Filter';
import ItemsList from './ItemsList';
import Loading from '../UI/Loading';
import Backdop from '../UI/Backdrop';
import {LookContext} from '../../store/context';

const ItemsContainer = ({loading,sortedItems})=>{
    const [filterShow,setFilterShow] = useState(false);
    const {filterApplied} = useContext(LookContext);

    if(loading){
        return <Loading/>
    }
    const handlechange = ()=>{
        setFilterShow(prev => !prev)
    }
    return(
        <>
        {filterShow?<Backdop open onclick={handlechange}/>:<Backdop />}
    <div className={filterApplied?"filter active":"filter"}>{filterShow?<Filter/>:<p onClick={handlechange}>{filterApplied?"FILTER ON":"FILTER"}</p>}</div>
        <ItemsList Items={sortedItems} />
        <style jsx>{`
            .filter{
                position: sticky;
                top: 85px;
                padding-left:30px;
                padding-top:2px;
                padding-bottom:12px;
                z-index:11;    
                transition:all 0.2s ease-in-out;
            }
            .filter:hover{
                transition:all 0.2s ease-in-out;
                background:white;
            }
            .filter p{
                display:inline;
                font-family:GothamHTF-Book, sans-serif;
                color:rgb(70, 67, 67);
                font-size:14px;
                cursor:pointer;
                transition: all 0.2s ease-in-out;
            }
            .filter p:hover{
                font-weight:bold;
                font-size:14px;
                color:black;
            }
            .active p{
                font-weight:bold;
                font-size:14px;
                color:rgb(160, 146, 17);
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
