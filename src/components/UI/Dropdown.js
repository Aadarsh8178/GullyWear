import React, { useState } from 'react'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'

function Dropdown({curr,setCurr,options,height}) { 
    const [dir,setDir] = useState(false) //false means down arrow
    let totalHeight=0;
    if(options){
        totalHeight = height * options.length
    }
    return (
        <div className="dropdown">
            <div className="select"  onClick={()=> setDir(prev => !prev)}>
                <span>{curr}</span>
                <span className="arrow">
                    {dir?<IoIosArrowUp size={16}/>:<IoIosArrowDown size={16}/>}
                </span>
                <ul className={dir?"dropdown-menu show":"dropdown-menu"}>
                    {options?options.map(op => <li key={op} onClick={()=> setCurr(op)}>{op}</li>):null}
                </ul>
            </div> 
            <style jsx>{`
                .dropdown{
                    display: inline-block;
                    position:relative;
                    background: white;
                    border-radius: 0;
                    -webkit-transition: all .5s ease;
                    transition: all .5s ease;
                    font-size: inherit;
                    font-family:inherit;
                    color:grey;
                    height:100%;
                    width:100%;
                    text-align: left;
                    text-transform: uppercase;
                    outline: 0;
                    
                }
                .select{
                    position:relative;
                    cursor: pointer;
                    display: flex;
                    padding: 7px;
                    background:white;
                    width:100%;
                    height:100%;
                    align-items:center;

                }
                .arrow{
                    position:absolute;
                    display:flex;
                    align-items:center;
                    z-index:100;
                    top:0;
                    right:0;
                    width: 16px;
                    height: 100%;
                    color: #000;
                    cursor: pointer;
                    -webkit-transition: all .3s ease-in-out;
                    transition: all .3s ease-in-out;
                }
                .dropdown-menu{
                    position: absolute;
                    background-color: #fff;
                    height:0px;
                    width: 100%;
                    top:${height}px;
                    left: 0;
                    margin-top: 0;
                    border-radius: 0;
                    overflow: hidden;
                    padding: 0;
                    list-style: none;
                    outline: 0;
                    z-index: 100;
                    transition: height .2s ease-in-out;
                }
                .show{
                    height:${totalHeight}px;
                    margin-bottom:2rem;
                    transition: height .2s ease-in-out;
                }
                .dropdown-menu li{
                    height:2.5rem;
                    padding: 10px;
                    -webkit-transition: all .2s ease-in-out;
                    transition: all .2s ease-in-out;
                    cursor: pointer;
                }
            `}</style>
        </div> 
    )
}

export default Dropdown
