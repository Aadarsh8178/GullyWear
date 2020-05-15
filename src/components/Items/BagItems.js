import React,{useContext,useState} from 'react';
import {LookContext} from '../../store/context';

import {FiStar} from 'react-icons/fi';
import {RiCloseLine} from 'react-icons/ri';
import Dropdown from '../UI/Dropdown';

function BagItems({item,size,setTotalPrice,hover}) {
    let display = "block"
    let flex="flex"
    let margin="2rem"
    if(hover){
        display="none"
        flex="none"
        margin="0.8rem"
    }
    const {removeFromBag,addtoFav} = useContext(LookContext)
    const {slug,images,price,description,brand,color,qty}= item
    const [bagprice,setBagPrice] = useState(price)
    const [quantity,setQuantity] = useState(1)
    const handleremoveFromBag = (slug)=>{
        setTotalPrice(-bagprice)
        removeFromBag(slug,size)
    }
    const handlesetQuantity = (curr)=>{
        setQuantity(curr)
        setTotalPrice((curr*price) - bagprice)
        setBagPrice(curr*price)   
    }
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
                    <div className="small-details">
                        <p><span>Brand:</span><span>{brand}</span></p>
                        <p><span>Size:</span><span>{size}</span></p>
                        <p><span>Color: </span><span>{color}</span></p>
                        <p><span>Price:</span><span style={{fontWeight:"600"}}>{bagprice}</span></p>
                    </div> 
                </div>
                <div className="buttons big">
                    <button onClick={()=>{addtoFav(item);handleremoveFromBag(slug);}}><FiStar size={20}/></button>
                    <div className="dropdown">
                        <Dropdown height={40} curr={quantity} setCurr={(curr) => handlesetQuantity(curr)} options={[...Array(qty-1).keys()].map(x => x = x+1)}/>
                    </div> 
                </div>
            </div>
             <span className="close" onClick={()=>handleremoveFromBag(slug)}><RiCloseLine size={24}/></span>
          </div>
          <div className="buttons small">
                <button onClick={()=>{addtoFav(item);handleremoveFromBag(slug);}}><FiStar size={20}/></button>
                <div className="dropdown">
                    <Dropdown height={40} curr={quantity} setCurr={(curr) => handlesetQuantity(curr)} options={[...Array(qty-1).keys()].map(x => x = x+1)}/>
                </div> 
            </div>
          <style jsx>{`
            .item{
                display:flex;
                position:relative;
                flex-direction:column;
                align-items:flex-start;
                min-width:50%;
                margin-bottom:${margin}; 
            }
            .card{
                display:flex;
                width:100%;
                font-family: 'Poppins', sans-serif;
            }
            .card a{
                align-self:flex-end;
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
                width:50%;
            }
            .details p{
                text-align:left;
            }
            .desc,.price{
                width:100%;
                font-size: 15px;
                font-weight:500;
                line-height: 20px;
            }
            .small-details{
                text-align:left;
                display:flex;
                flex-wrap:wrap;
                width:100%;
                max-width:25rem;
                margin-top:0.7rem;
                font-size:13px;
                font-weight:400;
            }
            .small-details p{
                min-width:12rem;
            }
            .small-details span{
                display:inline-block;
                width:50%;
            }
            .align{
                display:block;
                min-width:3rem;
            }
            .buttons{
                margin-top:1rem;
                display:${flex};
            }
            .dropdown{
                min-width:9rem;
                height:40px;
                font-size:14px;
                color:grey;
                text-align:center;
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
                background:white;
                color:black;
                border:0;
            } 
            .buttons button:hover{
                background:black;
                color:white;
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
                .big{
                    display:none;
                }
                .small{
                    display:${flex};
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
                display:${display};
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

export default BagItems
