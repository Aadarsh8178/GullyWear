import React from 'react'

export default function Backdrop(props) {
    return (
        <div className={props.open?"backdrop open":"backdrop"} onClick={props.onclick}>
        <style jsx>{`
        .backdrop{
            position: fixed; /* Sit on top of the page content */
            display: block; /* Hidden by default */
            width: 0; /* Full width (cover the whole page) */
            height: 100%; /* Full height (cover the whole page) */
            top:0;
            left: 0;
            opacity:0;
            background-color: rgba(0,0,0,0.3); /* Black background with opacity */
            z-index: 10;
            -webkit-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
          }
          .open{
            opacity:1;
            width:100%;
          }
        `}
        </style>
        </div>
    )
}