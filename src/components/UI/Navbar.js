import React,{useState,useContext} from 'react'
import Link from 'next/link'
import Nprogress from 'nprogress';
import Router from 'next/router';

import {FaAlignLeft} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {FiSearch} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'
import {FiShoppingBag} from "react-icons/fi";
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'
import logo from '../../../public/static/images/logo.png'
import {LookContext} from '../../store/context'


Router.onRouteChangeStart = url => {
  console.log('Started')
  Nprogress.start()
}
Router.onRouteChangeComplete = () => Nprogress.done()
Router.onRouteChangeError = () => Nprogress.done();

const Navbar = ()=>{
  const context = useContext(LookContext)
  const [state,setState] = useState({
    bagItems:0,
    favs:0,
    search:false
  })
  const [searchInput,setSearchInput] = useState("")
  const handleChange = event => {
    setSearchInput(event.target.value)
  };
  const handleSearchToggle = ()=>{
    setState(prev => {
      return {...state,search:!prev.search}
    })
  }
  const {toggledrawer,closedrawer,sidedrawer:isOpen} = context
  return (
    <div>
      <Backdrop open={isOpen} onclick={toggledrawer}></Backdrop>
      <nav className="navbar">
          <div className="nav-header">
            <button type="button" className="nav-btn" onClick={toggledrawer}>
              <FaAlignLeft size={25} className="nav-icon"/>
            </button>
            <Link href="/"><a><img src={logo} className="logo" onClick={closedrawer}/></a></Link>
            <div className="nav-items">
            <input
                    type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={handleChange}
                    className={state.search?"search-form showsf":"search-form"}
                  />
              <FiSearch size={20} className={state.search?"search":"search shows"} onClick={handleSearchToggle}/>
              <Link href="/profile"><a><FiUser size={20} className="profile"/></a></Link>
              <Link href="/favourite"><a><FiStar size={20} className="fav"/></a></Link>
              <span className="favn">{state.favs}</span>
              <Link href="/bag"><a className="bag"><FiShoppingBag size={20}/></a></Link>
              <span className="bagn">{state.bagItems}</span>
            </div>
          </div>
          <div className="links-container">
            <ul>
              <li onClick={closedrawer}>
                <Link href="/"><a>Home</a></Link>
              </li>
              <li onClick={closedrawer}>
                <Link href="/looks"><a>Looks</a></Link>
              </li>
              <li onClick={closedrawer}>
                <Link href="/footwear"><a>Footwear</a></Link>
              </li>
              <li onClick={closedrawer}>
                <Link href="/apparel"><a>Apparel</a></Link>
              </li>
              <li onClick={closedrawer}>
                <Link href="/markdowns"><a>Markdowns</a></Link>
              </li>
            </ul>
          </div> 
      </nav>
      <SideDrawer open={isOpen} handleToggle={toggledrawer}></SideDrawer>
      <style global jsx>{`
        .nav-header{
          display:grid;
          grid-template-columns:1fr 50px 1fr;
          justify-content:start;
          width:100%;
        }
        .nav-items{
          display:grid;
          margin-top:1rem;
          margin-right:1rem;
          grid-template-columns:repeat(7,min-content);
          grid-column-gap:5px;
          justify-content:end;
          align-content:start;
          grid-template-areas:"search-form search profile fav favn bag bagn";
        }
        @media screen and (max-width:768px){
          .nav-items{
            grid-column-gap:1px;    
            grid-template-columns:repeat(6,min-content); 
            grid-template-areas:"search profile fav favn bag bagn";               
          }
        }
        .profile{
          grid-area:profile;
        }
        .fav{
          grid-area:fav;
        }
        .favn{
          grid-area:favn;
        }
        .bag{
          grid-area:bag;
        }
        .bagn{
          grid-area:bagn;
        }
        .search{
          opacity:0;
          width:0;
          cursor:pointer;
          grid-area:search;
          transition: all 1s linear;
        }
        .search-form{  
          grid-area:search-form;
          background-color:rgb(238, 234, 234);
          -webkit-appearance: none;
          -moz-appearance:none;
          appearance:none;
          transition: all 0.3s ease-in-out;
          width:0;
          opacity:0;
        }
        .shows{
          width:auto;
          opacity:1;
        }
        .showsf{
          opacity:1;
          border:1px solid rgb(238, 234, 234);
          border-radius:20px;
          padding:4px;
          padding-left:10px;
          width:180px;
        }
        @media screen and (max-width:768px){
          .search-form{
            position:fixed;
            z-index:12;
            top:50px;
            left:0;
            width:100vw;
            height:0px;
            border-radius:0;
            border:5px white solid;
            padding:4px;
            padding-left:10px;
            transition: all 0.3s linear;
          } 
          .search{
            display:block!important;
            opacity:1!important;
            width:auto!important;
          }
          .showsf{
            opacity:1;
            height:40px;
          }
        }
        .search-form:focus{
          outline:none;
        }
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 0.1rem 0;
          background: white;
          z-index: 100;
        }
        .nav-btn {
          height:25px;
          width:25px;
          display:block;
          margin-left:1rem;
          align-self:center;
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
        }
        .nav-icon {
          font-size: 1.5rem;
          color: black;
        }
        
        .logo{
          padding:0.2rem;
          height:50px;
          width:50px;
        }
        
        .links-container{
          height:27px;
          padding-bottom:0.4rem;
        }
        .links-container ul{
          height: 23px;
          width:100;
          display: grid;
          grid-template-columns: repeat(auto-fit,90px);
          justify-content:center;
          justify-items:center;
          list-style:none;
        }
        
        .links-container a{
          text-decoration:none;
          font-family:GothamHTF-Book, sans-serif;
          font-size:14px;
          margin:auto;
          color:black;
          transition: 0.2s ease-in-out;
        }
        .links-container a:hover{
          transition: 0.2s ease-in-out;
          font-size:16px;
          font-weight:bold;
        }
        @media screen and (max-width:768px){
          .links-container{
            display:none;
          }
        }
        a{
          color:black;
        }
      `}</style>
    </div>       
);
}

export default Navbar
