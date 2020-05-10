import React,{useContext} from 'react';
import Link from 'next/link';

import {LookContext} from '../../store/context';

import {FiShoppingBag} from "react-icons/fi";
import {RiCloseLine} from 'react-icons/ri';

function FavItem({item}) {
    const {removeFav} = useContext(LookContext)
    const {slug,images,price,description,brand}= item
    console.log(item)
    return (
        <div className="item">
          <div className="card">
            <a  href={`http://localhost:3000/singleitem/${slug}`}>
                    <img 
                    className="img"
                    src={images[0].url}
                    alt="Unable to load"/> 
            </a> 
            <div className="side">
                <div className="details">
                    <h6 className="desc">{description}</h6>
                    <h6 className="price"><span>&#8377;</span>{price}</h6>
                </div>
                <div className="buttons big">
                    <select id="size">
                        <option value="" selected>Select Size</option>
                    </select>
                    <button><FiShoppingBag size={20}/><span>Add</span></button>
                </div>
            </div>
             <span className="close" onClick={()=>removeFav(item,slug)}><RiCloseLine size={24}/></span>
          </div>
          <div className="buttons small">
                    <select id="size">
                        <option value="" selected>Select Size</option>
                    </select>
                    <button><FiShoppingBag size={20}/><span>Add</span></button>
            </div>
          <style jsx>{`
            .item{
                display:flex;
                position:relative;
                flex-direction:column;
                align-items:flex-start;
                min-width:55vw;
                margin-bottom:2rem;
            }
            .card{
                display:flex;
            }
            .img{
                width:142px;
                height:213px;
            }
            .side{
                display:flex;
                margin-top:24px;
                margin-left:1rem;
                flex-direction:column;
                justify-content:space-around;
            }
            .desc,.price{
                width:50%;
                font-size:1rem;
                font-family:GothamHTF-Book, sans-serif;
            }
            .buttons{
                display:flex;
            }
            .buttons select,.buttons button{
                display:flex;
                text-align:center;
                padding:5px 0;
                cursor:pointer;
                min-width:9rem;
                height:2.5rem;
                font-weight:bold;
                background:white;
                margin-right:1.5rem;
                color:grey;
                font-size:12px;
                justify-content:center;
                transition:all 0.2s linear;
            }
            .buttons button{
                background:black;
                color:white;
                border:0;
            }
            .buttons button span{
                margin-left:1rem;
                font-size:16px;
                font-family:GothamHTF-Book, sans-serif;
                font-weight:bold;
                padding-top: 2px;
                background:black;
                vertical-align:bottom;
            }
            .small{
                display:none;
            }
            @media screen and (max-width:768px){
                .img{
                    width:101px;
                    height:151.5px;
                }
                .item{
                    width:80vw;
                }
                .desc,.price{
                    font-size:0.7rem;
                }
                .big{
                    display:none;
                }
                .small{
                    display:flex;
                    width:100%;
                }
                .small select,.small button{
                    margin-top:1rem;
                    width:45%;
                    min-width:7rem;
                }
            }
            .close{
                position:absolute;
                right:0;
                top:0;
                color:grey;
                cursor:pointer;
                transform:translate(-15%,-15%);
                transition:all 0.2s linear;
            }
            .close:hover{
                transition:all 0.2s linear;
                color:black;

            }
          `}</style>
        </div>
    )
}

export default FavItem
