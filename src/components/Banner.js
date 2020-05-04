import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <>
            <div className="banner">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {children}
            </div>
    <style jsx>{`
         .banner {
            display: flex;
            flex-direction:column;
            background: rgba(0, 0, 0, 0);
            width:100%;
            align-items:center;
            justify-content:center;
          }
          .banner h1{
            font-family: 'Open Sans Condensed', sans-serif;
            color:white;
            margin-bottom:0;
            text-transform: uppercase;
          }
          .banner p{
            font-family: 'Open Sans Condensed', sans-serif;
            color:white;
            text-align:center;
            font-size:11px;
            margin-bottom:1rem;
            text-transform: lowercase;
          }
          
    `}</style>
        </>
    )
}
