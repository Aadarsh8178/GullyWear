import React from 'react'
import Item from './Item'

export default function ItemList({Items}) {
    if(Items.length===0){
        return (
            <div className="empty-search">
               <h3>Unfortunately no looks matched your search parameters</h3>     
            </div>
        )
    }
    return <section className="">
        <div className="items-center">
            {
                Items.map(item => {
                    
                    if(!(item.type==="Main"))
                        return <Item key={item.id} item={item}/>
                })
            }
        </div>
        <style jsx>{`
            looks {
                padding: 10rem 0;
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
    </section>
}
