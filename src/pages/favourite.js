import React,{useContext} from 'react'
import {useRouter} from 'next/router'
import {LookContext} from '../store/context'
import Item from '../components/Items/FavItem'

function favourite() {
    const Router = useRouter()
    const {favoriteLooks} = useContext(LookContext)
    let favItems = favoriteLooks.map((item)=>{
        return <Item item={item.look} key={item.id}/>
    })
    if(favItems.length===0){
        favItems = (
            <div>
                <h4>SAVE YOUR FAVOURITE ITEMS</h4>
                <p>Want to save the items that you love? Just click on the star symbol beside the item and it will show up here.</p>
                <p className="btn" onClick={()=>Router.push('/')}>EXPLORE NOW</p>
                <style jsx>{`
                p{
                    width:60%;
                    margin:1rem auto;
                    text-align:center;
                    font-family:GothamHTF-Book, sans-serif;
                }
                h4{
                    text-align:center;
                }
                .btn{
                    cursor:pointer;
                    height:2rem;
                    width:6rem;
                    margin:1rem auto;
                    padding:5px;
                    background:black;
                    color:white;
                    text-align:center;
                }
                `}</style>
            </div>
        )
    }
    return (
        <div className="favourites">
            <p className="fav-heading">Favuorites</p>
            {favItems}
            <style jsx>{`
                .favourites{
                    display:flex;
                    flex-direction:column;
                    background:rgb(250, 249, 248);
                    min-height:85vh;
                    align-items:center;
                }
                .fav-heading{
                    font-family: 'Poppins', sans-serif;
                    font-size:40px;
                    font-weight:600;
                    margin:2rem 0;
                    margin-bottom:2rem;
                }
            `}</style>
        </div>
    )
}

export default favourite
