import React,{useState,useEffect,useRef} from 'react'

import ImgComp from './ImgComp'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import {GoPrimitiveDot} from "react-icons/go";
import sliderStyle from './sliderStyle';

const Slider = (props)=> {
    let images = props.images
    if(!images){
        return (
            <>
            <div className="slider">
                <div className="fallbackTile slide"></div>
            </div>
        <style jsx>{`
        .slider{
            height: 100%;
            width:100%;
        }
        .fallbackTile{
            background-color: rgba(0,0,0,0.5);
            height:100%;
            width:100%;

        }
        `}</style>
            </>
        )
    }
    let sliderArr = images.map(img => (<ImgComp src={img.url}>{img.extra}</ImgComp>))
    const [x,setX] = useState(0)
    const [touched,setTouched] = useState(false)
    let lastTouch = 0;
    let newtouched =0;
    const timer = useRef()
    const goLeft = ()=>{
        x === 0 ? setX((-100)*(sliderArr.length-1)): setX(x => x+100);   
    }
    if(x===-100 * (sliderArr.length)){
        setX(0);
    }

    const goRight = ()=>{
        x=== -100 * (sliderArr.length-1)?setX(0):setX(x => x-100);
    }

    useEffect(()=>{
        if(props.autoplay){
            timer.current = setInterval(()=>{
                goRight()
            },props.time);
        }
        return ()=>{
            clearInterval(timer.current)
        }
    },[])
    useEffect(()=>{ 
        props.onChange(Math.abs(x/100));
        if(touched)
            clearInterval(timer.current)        
    },[x])
    const handleTouchStart = e => {
        setTouched(true);
        lastTouch = e.nativeEvent.touches[0].clientX;
    };
    const handleTouchMove = async (e) => {
        newtouched = e.nativeEvent.touches[0].clientX;

    };
    const handleTouchEnd = () => {
        const delta = lastTouch - newtouched;
        if(delta<0){
            goLeft();    
        }
        else if(delta>0){
            goRight();
        }
        lastTouch=0;
    };
    const dotClicked = (index)=>{
        setTouched(true);
        setX(-(index*100));
    }
    
    return (
        <div className="slider" 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
           {
               sliderArr.map((item,index)=>{
                   return (
                       <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                           {item}
                        </div>
                   )
               })
           }
           <FiChevronLeft className="goLeft" onClick={() => { setTouched(true); goLeft(); }}/>
           <FiChevronRight className="goRight" onClick={() => { setTouched(true); goRight(); }}/>
           <div className="sliderBullets">
                {
                    sliderArr.map((item,index) =>{
                        return (
                            <GoPrimitiveDot key={index} size={20} onClick={()=>dotClicked(index)} className={Math.abs(x/100)===index?"active":"dots"}/>
                        )
                    })
                }
            </div>
           <style jsx>
               {sliderStyle}
           </style>
        </div>
    )
}

export default Slider
