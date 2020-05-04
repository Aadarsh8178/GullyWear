import React, { useContext } from 'react';
import Router from 'next/router';

import Featured from '../components/Featured';
import {LookContext} from '../store/context';
import Slider from '../components/Slider/Slider';
import Banner from '../components/Banner';
import FallbackSlider from '../components/Fallbacks/FallbackSlider';

const index = ()=>{
    const context = useContext(LookContext)
    const handleclick = (link)=>{
        Router.push(link)
    }
    const handleChange = ()=>{}
    const main = context.mainpage
    let images=null
    if(main){
        images = main.images.map(img=>{
        return {
            url:img.url,
            extra:<Banner title={img.type} subtitle={img.description}>
                <p className="btn-primary" onClick={()=>handleclick(img.link)}>view</p>
            </Banner>
        }
    })}
    
    return (
        <div className="main-align">
            
        {images!==null?<div className="main-slider">
                <Slider 
                images={images} 
                autoplay={true} 
                time={4000}
                onChange={handleChange}/>
            </div>:<div className="main-slider"><FallbackSlider/></div>}
        <Featured/>
    <style jsx>{`
        .imagealign{
            display:flex;
            position:absolute;
            z-index:0;
            align-items:center;
            justify-content:center;
        }
        .main-align{
            display:flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            margin-top:2rem;
            margin-bottom:7rem;
        }
        .main-slider{
            display:flex;
            height:70vh;
            width:80%;
            align-items: center;
            justify-content: center; 
            margin-bottom:6rem;     
        } 
        @media screen and (max-width:768px){
            .main-slider{
                height:50vh;
                width:95%;
            }
        }
    `}</style> 
        </div>
    );
}

export default index
