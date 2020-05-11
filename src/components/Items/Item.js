import React,{useContext,useState} from 'react';
import {LookContext} from '../../store/context';

import {AiFillStar} from 'react-icons/ai';

import PropTypes from 'prop-types'

const Item = ({item})=> {
    const {addtoFav,removeFav} = useContext(LookContext)
    const [fav,setFav] = useState(item.fav)
    const {slug,brand,description,price,images} = item
    const handleFavClick = ()=>{
      if(fav){
        removeFav(item,slug)
      }else{
        addtoFav(item)
      }
      setFav(prev => !prev)
    }
    return (
        <>
        <div className="item">
          <a href={`http://localhost:3000/singleitem/${slug}`} target="_blank">
            <div className="img-container">
                <img src={images[0].url}
                 alt="Unable to load"/> 
                 <div className="about">
                      <p className="brand">{brand}</p>
                      <p className="desc">{description}</p>
                      <p className="price">Rs.{price}</p>
                    </div>
            </div>
          </a>
          <span className={fav?"active star":"star"} onClick={handleFavClick}><AiFillStar  size={22}/></span> 
        </div>
    <style jsx>{`
        .item {
            display:grid;
            position:relative;
            align-items:center;
            justify-items:center
            align-content:start;
            transition: all 0.3s linear;
          }
          .item:hover .about{
            z-index:2;
            opacity:1;
            height:60px;
          }
          
          .about{
            position:absolute;
            bottom:0;
            left:0;
            height:0;
            width:100%;
            opacity:0;
            background:rgb(250, 249, 248);
            z-index:5;
            transition: all 0.3s ease-in-out;
          }
          .about p{
            text-align:center;
            font-size:12px;
            font-family:GothamHTF-Book, sans-serif;
            margin:0;
            padding:0;
          }
          .brand{
            font-weight:bold;
          }
          .price{
            font-weight:bold;
          }
          .star{
            position:absolute;
            cursor:pointer;
            z-index:10;
            right:0;
            bottom:0;
            margin-right:1rem;
            color:grey;
          }
          .star:hover,.active{
            color:rgb(145, 9, 9);     
          }
          }
          .img-container {
            position: relative;
            height:0;
            padding-bottom: 125%;
            cursor:pointer;
            overflow:hidden;
          }
          .img-container img {
            width:100%;
            display: block;
            transition: all 0.3s linear;
          }
          .img-container:hover {
            background: rgba(0, 0, 0, 0.9);
          }
          .img-container:hover img {
            opacity: 0.9;
          }
          .price-top {
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 0.3rem 0.6rem 0.5rem;
            border-bottom-right-radius: 1rem;
            font-size: 0.5rem;
            text-align: center;
            transition: all 0.3s linear;
          }
          .price-top h6 {
            margin-bottom: 0;
            font-size: 0.9rem;
            font-weight: 300;
            letter-spacing: 3px;
          }
          .item-link {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: scale(0);
            transition: all 0.3s linear;
          }
    `}</style>
        </>
    )
}
Item.propTypes = {
    item:PropTypes.shape({
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.object).isRequired,
        price:PropTypes.number.isRequired
    })
}

export default Item;