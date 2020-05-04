import React from 'react'

export default function Title({title}) {
    return (
        <>
        <div className="section-title">
            <h4>{title}</h4> 
            <div/>
        </div>
    <style jsx>{`
    .section-title {
        text-align: center;
        margin-bottom: 4rem;
      }
      .section-title h4 {
        font-family:GothamHTF-Book, sans-serif;
        font-size:2.5rem;
        font-weight:normal;
        text-transform: capitalize;
        margin-bottom: 0.2rem;
      }
      .section-title div {
        width:10rem;
        height: 1px;
        margin: 0 auto;
        background: rgb(212, 209, 209);
      }
    `}</style>
        </>
    )
}
