import React from 'react'
const Loading = (props) => {
    const area = props.area || 80
    const ball = props.ball || 13
    const gap = props.gap || 24
    const base = props.base || 8
    return (
        <>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <style jsx>{`
            .lds-ellipsis {
                display: inline-block;
                position: relative;
                width: ${area}px;
                height: ${area}px;
              }
              .lds-ellipsis div {
                position: absolute;
                top: 33px;
                width: ${ball}px;
                height: ${ball}px;
                border-radius: 50%;
                background: black;
                animation-timing-function: cubic-bezier(0, 1, 1, 0);
              }
              .lds-ellipsis div:nth-child(1) {
                left: ${base}px;
                animation: lds-ellipsis1 0.6s infinite;
              }
              .lds-ellipsis div:nth-child(2) {
                left: ${base}px;
                animation: lds-ellipsis2 0.6s infinite;
              }
              .lds-ellipsis div:nth-child(3) {
                left: ${base+gap}px;
                animation: lds-ellipsis2 0.6s infinite;
              }
              .lds-ellipsis div:nth-child(4) {
                left: ${base+gap+gap}px;
                animation: lds-ellipsis3 0.6s infinite;
              }
              @keyframes lds-ellipsis1 {
                0% {
                  transform: scale(0);
                }
                100% {
                  transform: scale(1);
                }
              }
              @keyframes lds-ellipsis3 {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(0);
                }
              }
              @keyframes lds-ellipsis2 {
                0% {
                  transform: translate(0, 0);
                }
                100% {
                  transform: translate(${gap}px, 0);
                }
              }              
        `}</style>
        </>
    )
}

export default Loading