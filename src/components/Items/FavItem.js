import React,{useContext, useState} from 'react';
import Link from 'next/link';
import {LookContext} from '../../store/context';

import {FiShoppingBag} from "react-icons/fi";
import {RiCloseLine} from 'react-icons/ri';
import Dropdown from '../UI/Dropdown';
import Modal from '../UI/Modal';

function FavItem({item}) {
    const {removeFav,addtoBag} = useContext(LookContext)
    const {slug,images,price,description,brand,color,sizes}= item
    const [size,setSize] = useState('Select Size')
    const [showModal,setShowModal] = useState(false);
    const handleBagClick = ({item,slug,size})=>{
        if(size==='Select Size'){
            setShowModal(true)
            return;
        }
        removeFav(item,slug)
        addtoBag(item,size,1)
    }
    return (
        <div className="item">
          <div onClick={()=>setShowModal(false)}>
            <Modal show={showModal} modalClosed={()=>setShowModal(false)}>
                <div style={{fontSize:'16px',
                padding:'20px',
                fontWeight:'400',
                textAlign:'center'}}>
                    Please select a size
                </div>
            </Modal>
        </div>
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
                    <div className="small-details">
                        <span className="align">Brand: </span><span>{brand}</span>
                        <span className="align">Color: </span><span>{color}</span>
                    </div>  
                </div>
                <div className="buttons big">
                    <div className="dropdown">
                        <Dropdown height={40} curr={size} setCurr={(curr) => setSize(curr)} options={['M','S','L','XL']}/>
                    </div> 
                    <button onClick={()=>handleBagClick({item,size,slug})}><FiShoppingBag size={20}/><span>Add</span></button>
                </div>
            </div>
             <span className="close" onClick={()=>removeFav(item,slug)}><RiCloseLine size={24}/></span>
          </div>
          <div className="buttons small">
              <div className="dropdown">
                <Dropdown height={40} curr={size} setCurr={(curr) => setSize(curr)} options={['M','S','L','XL']}/>
              </div>
              <button onClick={()=>handleBagClick({item,size,slug})}><FiShoppingBag size={20}/><span>Add</span></button>
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
            .small-details{
                display:flex;
                flex-wrap:wrap;
                max-width:10rem;
                margin-top:0.7rem;
                font-size:13px;
                font-weight:400;
            }
            .align{
                display:block;
                min-width:5rem;
            }
            .buttons{
                margin-top:1rem;
                display:flex;
            }
            .dropdown{
                min-width:9rem;
                height:40px;
                font-size:14px;
                color:grey;
                text-align:center;
                margin-right:1rem;
                transition: all .2s ease-in-out;
            }
            .buttons button{ 
                display:flex;
                outline-style:none;
                text-align:center;
                padding:5px 7px;
                cursor:pointer;
                min-width:9rem;
                height:40px;
                font-weight:300;
                margin-right:1rem;
                font-size:14px;
                justify-content:center;
                transition:all 0.2s linear;
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
                .dropdown,.small button{
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
