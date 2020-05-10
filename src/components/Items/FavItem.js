import React,{useContext} from 'react';
import Link from 'next/link';
import {LookContext} from '../../store/context';

import {FiShoppingBag} from "react-icons/fi";
import {RiCloseLine} from 'react-icons/ri';

function FavItem({item}) {
    const {removeFav} = useContext(LookContext)
    const {slug,images,price,description,brand,color}= item
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
                    <p className="desc">{description}</p>
                    <p className="price"><span>&#8377;</span>{price}</p>
                    <p className="brand"><span className="align">brand: </span><span>{brand}</span></p>
                    <p className="color"><span className="align">color: </span><span>{color}</span></p>
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
                min-width:50vw;
                margin-bottom:2rem;
            }
            .card{
                display:flex;
                font-family: 'Poppins', sans-serif;
            }
            .img{
                width:142px;
                height:213px;
            }
            .side{
                display:flex;
                margin-top:24px;
                margin-left:1.5rem;
                flex-direction:column;
            }
            .desc,.price{
                width:70%;
                font-size: 15px;
                font-weight:500;
                line-height: 20px;
            }
            .brand,.color{
                font-size:13px;
                font-weight:400;
            }
            .brand{
                margin-top:0.7rem;
            }
            .align{
                display:inline-block;
                width:5rem;
            }
            .buttons{
                margin-top:1rem;
                display:flex;
            }
            .buttons select,.buttons button{
                
                display:flex;
                outline-style:none;
                text-align:center;
                padding:5px 7px;
                cursor:pointer;
                min-width:9rem;
                height:2.5rem;
                font-weight:300;
                background:white;
                margin-right:1rem;
                color:grey;
                font-size:14px;
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
                font-size:17px;
                font-weight:400;
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
                .big{
                    display:none;
                }
                .small{
                    display:flex;
                    width:100%;
                }
                .small select,.small button{
                    width:50%;
                    min-width:0;
                }
                .align{
                    width:3.5rem;
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
