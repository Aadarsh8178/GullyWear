import React, { useState,useContext, useEffect } from 'react';

import Item from '../components/Items/BagItems';
import {LookContext} from '../store/context'
function bag(props) {
    let hover=false
    let display="block"
    let checkoutwidth = "0"
    let cartitems=""
    let minHeight="90vh"
    if(props.hover){
        minHeight="0"
        hover = true
        display="none"
        checkoutwidth = "100%"
        cartitems = "height:55%;min-width:${checkoutwidth};overflow-y:scroll;overflow-x:hidden;margin-right:0;padding:1rem;"
    }
    let {bagItems,deliveryPrice,freedelivery} = useContext(LookContext)
    const [code,setCode] = useState('')
    const [bagArticles,setBagArticles] = useState([])
    const [totalPrice,setTotalPrice] = useState(0);
    const [delPrice,setDelPrice] = useState(deliveryPrice);
    let initprice=0;
    useEffect(()=>{
         let NewbagArticles = bagItems.map((item)=>{
            initprice = initprice + item.look.price
            return <Item key={item.id+item.size} 
                    item={item.look} 
                    size={item.size}  
                    setTotalPrice={(newprice)=>setTotalPrice(prev => prev + newprice)}
                    hover={hover}/>
        })
        setBagArticles(NewbagArticles)
        if(initprice>freedelivery){
            setDelPrice(0)
        }
        setTotalPrice(initprice)
    },[bagItems])
    const openSignin = ()=>{
        document.getElementById('profile').click()
    }
    const handleInput = (e)=>{
        setCode(e.target.value)
    }
    const handleCoupon = ()=>{
        // check coupon and deduct total price
    }
    if(bagArticles.length===0){
        setTotalPrice(0)
        setDelPrice(0)
        setBagArticles((
            <div className="empty-bag">
            <h5 className="heading">YOUR SHOPPING BAG IS EMPTY!</h5>
            <p>Sign in to save or access already saved items in your shopping bag.</p>
            <p className="link" onClick={openSignin}>sign in</p>
            <style jsx>{`
                .empty-bag{
                    padding:2rem;
                    background:white;
                    padding-right:3rem;
                    text-align:left;
                    font-family: 'Poppins', sans-serif;
                }
                .heading{
                    font-weight:600;
                    font-size:30px;
                }
                .empty-bag p{
                    font-size:14px;
                    font-weight:400;

                }
                .link{
                    margin-top:1.5rem;
                    text-transform:uppercase;
                    cursor:pointer;
                }
                @media screen and (max-width:768px){
                    .heading{
                        font-size:1rem;
                    }
                    .empty-bag{
                        padding:2rem 1rem;
                    }
                    .empty-bag p{
                        font-size:12px;
                        font-weight:400;
                    }
                }
            `}</style>
        </div>
        )) 
    }
    return (
        <div className="bag">
            <p className="bag-heading">SHOPPING BAG</p>
            <div className="bag-content">
                <div className="cart-items">
                    {bagArticles}
                </div>
                <div className="checkout-container">
                    <div className="discount">
                        <p>add a discount code</p>
                        <div className="checkout-input">
                            <input
                                type="text"
                                value={code}
                                placeholder={''}
                                onChange={handleInput}
                            ></input>
                            <p onClick={handleCoupon} className="addbtn">add</p>
                        </div>     
                    </div>
                    <div className="details">
                        <p className="align"><span>Order value</span><span>Rs.{totalPrice}</span></p>
                        <p className="align"><span>Delivery</span><span>{delPrice===0?'FREE':'Rs.'+delPrice}</span></p>
                        <p className="align total"><span>Total</span><span>Rs.{delPrice+totalPrice}</span></p>
                        <p className="checkoutbtn">continue to checkout</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bag{
                    text-align:center;
                    font-family: 'Poppins', sans-serif;
                    font-size:14px;
                    width:100%;
                    height:100%;
                    min-height:${minHeight}
                }
                .bag-heading{
                    display:${display};
                    font-size:40px;
                    font-weight:600;
                    margin:2rem 0;
                    margin-bottom:3rem;
                }
                .bag-content{
                    display:flex;
                    justify-content:center;
                    align-items:flex-start;
                    flex-wrap:wrap;
                    width:100%;
                    height:100%;
                }
                .cart-items{
                    margin-right:1.5rem;
                    
                    ${cartitems}
                }
                .cart-items::-webkit-scrollbar {
                    width: 4px;
                }
                
                .cart-items::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);     
                }
                
                .cart-items::-webkit-scrollbar-thumb {
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
                }
                .checkout-container{
                    padding:1rem;
                    background:white;
                    display:flex;
                    flex-direction:column;
                    width:28%;
                    min-width:${checkoutwidth}
                }
                .discount{
                    display:${display};
                    font-size:14px;
                    font-weight:400;
                    text-align:left;
                    text-transform: uppercase;
                    width:100%;
                    margin-top:2rem;
                    margin-bottom:1rem;
                }
                .checkout-input{
                    display:flex;
                    align-items:center;
                    width:100%;
                    margin-top:0.6rem;
                }
                .checkout-input input{
                    padding:8px;
                    font-size:18px;
                    width:85%;
                    color:grey;
                    margin-right:1rem;
                    outline-style:none;
                    border:1px doted grey;
                    height:3rem;
                }
                .addbtn{
                    display:flex;
                    border:1px black solid;
                    align-items:center;
                    justify-content:center;
                    cursor:pointer;
                    height:3rem;
                    width:15%;
                    background:rgb(228, 224, 224);
                    transition: all 0.2s ease-in-out;
                }
                .addbtn:hover{
                    background:black;
                    color:white;
                    transition: all 0.2s ease-in-out;
                }
                .details{
                    font-weight:400;
                }
                .total{
                    margin-top:0.5rem;
                    font-weight:600;
                }
                .checkoutbtn{
                    margin:1rem 0;
                    display:flex;
                    text-transform:uppercase;
                    cursor:pointer;
                    justify-content:center;
                    align-items:center;
                    border:1.5px black solid;
                    background:rgb(228, 224, 224);
                    width:100%;
                    height:3rem;
                    transition: all 0.2s ease-in-out;
                }
                .checkoutbtn:hover{
                    background:black;
                    color:white;
                    transition: all 0.2s ease-in-out;
                }
                .align{
                    display:flex;
                    justify-content:space-between;
                }
                .details{
                }
                @media screen and (max-width:1024px){
                    .checkout-container{
                        margin-top:0;
                        padding:1rem;
                        min-width:90%;
                    }
                    .cart-items{
                        margin-right:0;
                        margin-bottom:0;
                        padding:1rem;
                        min-width:90%;
                    }
                }
                @media screen and (max-width:768px){
                    .bag-heading{
                        font-size:1.5rem;
                    }
                    .checkoutbtn{
                        background:black;
                        color:white;
                    }
                }
            `}</style>
        </div>
    )
}

export default bag
