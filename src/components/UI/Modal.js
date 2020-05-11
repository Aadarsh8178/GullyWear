import React from 'react';

import Backdrop from './FullBackdrop';

function Modal(props){
    return (
        <>
            <Backdrop open={props.show} onclick={props.modalClosed}/>
            <div
                className='Modal'
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.show?props.children:null}
            </div>
            <style jsx>{`
                .Modal {
                    position: fixed;
                    z-index: 500;
                    background-color: white;
                    width: 70%;
                    border: 1px solid #ccc;
                    box-shadow: 1px 1px 1px black;
                    padding:0;
                    margin:0;
                    left: 15%;
                    top: 20%;
                    box-sizing: border-box;
                    transition: all 0.3s ease-out;
                }
                @media (min-width: 600px) {
                    .Modal {
                        width: 500px;
                        left: calc(50% - 250px);
                    }
                }
            `}</style>
        </>
    )
}

export default React.memo(Modal);