import React,{useContext} from 'react';

import {LookContext} from '../context';

//get all unique values
const getUnique = (items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}
function LooksFilter() {
    const context = useContext(LookContext)
    const {
        handleChange,
        type,
        price,
        occasion,
        minPrice,
        maxPrice,
        lowtohigh,
        hightolow,
        handleScroll
    } = context;
    return (
        <section className="filter-container">
          <div className="MaxMin">
            <p>Max-price Rs {price}</p>
            <input type="range" name="price" min={minPrice}
            max={maxPrice} id="price" value={price} onChange=
            {handleScroll} className="slider"/>
          </div>
          <div className="sort">
            <p onClick={()=>handleChange("low-high")}>Price-Low-High  </p>
            <p onClick={()=>handleChange("high-low")}>PriceHigh-Low</p> 
            <a href={window.location.href}><p>Reset</p></a>
          </div>
             
    <style jsx>{`
          .filter-container{
            display:flex;
            justify-content:start;
            align-items:center;
            margin:1rem 0;
            font-size:14px;
            color:black;
            font-family:GothamHTF-Book, sans-serif;
          }
          .MaxMin{
            display:flex;
            width:20vw;
            margin:0 1rem;
            flex-direction:column;
          }
          .sort{
            display:flex;
            justify-content:space-between;
          }
          .sort p{
            margin:0 1rem;
            cursor:pointer;
          }
          .sort a{
            text-decoration:none;
          }
          .slider {
            -webkit-appearance: none;
            margin-top:5px;
            width: 100%;
            height: 3px;
            border-radius: 5px;  
            background: black;
            outline: none;
            opacity: 0.7;
            -webkit-transition: .2s;
            transition: opacity .2s;
          }
          
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 10px;
            height: 10px;
            border-radius: 50%; 
            background: #808080;
            cursor: pointer;
          }
          
          .slider::-moz-range-thumb {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #808080;
            cursor: pointer;
          }
          
    `}</style>
        </section>
    )
}

export default LooksFilter