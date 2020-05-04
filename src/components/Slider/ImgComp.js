import React from 'react'

function ImgComp(props) {
  
    return (
        <>
        <div className="slider-image">
            {props.children}
        </div>
    <style jsx>{`
        .slider-image{
            background-image:url(${props.src});
            background-repeat: no-repeat;
            background-position: 50% 30%; 
            background-size: cover;
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
        }    
    `}</style>
        </>
    )
}

export default ImgComp
