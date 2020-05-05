import React, {useState,useContext,useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Slider from '../../components/Slider/Slider';
import {LookContext} from '../../store/context';
import Loading from '../../components/UI/Loading';
import {FiStar} from 'react-icons/fi';

const SingleItem = ()=> {
    const router = useRouter()
    const {pid} = router.query
    let [current,setCurrent] = useState(0);
    let [item,setItem] = useState(null);
    const handleChange = (newValue)=>{
        setCurrent(newValue)
    }  
    const context = useContext(LookContext);
    let {loading,getLook} = context
    
    useEffect(()=>{
      if(!item){
        setItem(getLook(pid));
      }
    },)
    
    if(!item){
        return (<div>Not Found</div>)
    }
    if(loading){
        return <Loading/>
    }
    
    const images = item.images.map(img=>{
        return {url:img.url,extra:null}
    })
    const product = (
        <div className="product">
            <p className="brand">{item.brand}</p>
            <p className="Maindesc">{item.description}</p>
            <p className="price"><span>&#8377;</span>{item.price}</p>
        <style jsx>{`
            .product{
                align-self:start;
                margin-bottom:2rem;
                font-family:GothamHTF-Book, sans-serif;
              }
              .brand{
                font-size:22px;
                font-weight:bold;
                text-transform: uppercase;
              }
              .Maindesc{
                font-size:16px;
                color:grey;
                text-transform: capitalize;
              }
              .price{
                font-size:16px;
              }
        `}</style>
        </div>
    )
    const imgdesc = item.images.map(item =>{
        return (<div>
            <div className="desc">{item.description}</div>
            <div className="add">
                <div className="favorite"><FiStar size={20} className="favsingle"/>Add to favorite</div>
                {item.link!==""?<a href={item.link} target="_blank" className="link"><div className="buy">Buy</div></a>:null}
            </div>
        <style jsx>{`
            .add{
                display:flex;
                width:30vw;
                margin-top:3rem;
                justify-content:space-between;
              }
              .favsingle{
                margin-right:0.5rem;
                vertical-align:bottom;
              }
              .favorite,.buy{
                text-align:center;
                padding:5px 0;
                cursor:pointer;
                width:13vw;
                background:white;
                color:black;
                font-size:15px;
                transition: 0.2s ease-in-out;
              }
              a{
                text-decoration:none;
              }
        `}</style>
        </div>)
    })
    return (
        <>
        <div className="Align">  
            <div className="sliderTop">
                <div className="bagSlider">
                    <div className="BagSL">
                        <Slider 
                            images={images}
                            autoplay={true}
                            time={4000}
                            onChange={handleChange}
                        />  
                    </div>   
                </div>
            </div>
            <div className="single-item-info">
                {product}
                {imgdesc[current]}
            </div>
        </div>
    <style jsx>{`
        .singleitemMain{
            background:#f5f5f7;
          }
          .Align{
              display: flex;
              flex-wrap:wrap; 
              flex-direction:row;
              height:calc(100vh - 85px);
              background:#f5f5f7;
          }
          .sliderTop{
            position:relative;
            padding-top:1rem;
            width:50vw; 
            height:calc(100vh - 85px);
          }
          .bagSlider{
            position:relative;
            width:70%;
            margin:0 auto;
            padding-top:85%;    
          }
          .BagSL{
            position:absolute;
            width:100%;
            height:100%;
            max-width:489px;
            max-height:573px;
            top:0;
            left:0;
            overflow:hidden;
          }
            .single-item-info {
              margin-top:2%;
              width: 35vw;
              max-width: 1170px;
              vertical-align: baseline;
            }
            
            
            @media screen and (max-width:768px){
              .sliderTop{
                width:100vw; 
              }
              .Align{
                flex-direction:column;
                height:100%;
              }  
            }
    `}</style>
        </>
    )
}

export default SingleItem;
