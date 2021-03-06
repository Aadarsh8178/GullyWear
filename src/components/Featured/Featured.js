import React, { useContext } from 'react';

import {LookContext} from '../../store/context';
import Loading from '../UI/Loading';
import Item from '../Items/Item';
import Title from '../UI/Title';

const Featured = ()=>{
    const context = useContext(LookContext)
    let {loading,featuredLooks: items} = context
    items = items.map(item =>{
        return <Item key={item.id} item={item}/>
    })
    return (
        <>
        <section className="items">
            <Title title="featured"/>
            {loading?<div><Loading/></div>:
            <div className="items-center">
                {items}
            </div>}
            
        </section>
    <style jsx>{`
          .items {
            text-align:center;
            width:100%;
          }
          .items-center {
            width:100%;
            display:grid;
            justify-content:center;
            align-items:center;
            grid-gap:1.5rem;
            grid-row-gap:3rem;
            grid-template-columns: repeat(auto-fill,calc((100% - 128px)/4));
            margin-bottom:5rem;
          }
          @media screen and (max-width: 1080px){
            .items-center{
              grid-template-columns: repeat(auto-fill,calc((100% - 90px)/3))
            }
          @media screen and (max-width: 740px){
            .items-center{
              grid-template-columns: repeat(auto-fill,calc((100% - 50px)/2))
            }
          }
    `}</style>
        </>
    )
}

export default Featured
