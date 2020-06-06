import React,{useState,useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';

import {FaAlignLeft} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {FiSearch} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'
import {BsBag} from 'react-icons/bs'
import {FiShoppingBag} from "react-icons/fi";
import {FcLinux as Logo} from 'react-icons/fc'
import Modal from '../UI/Modal'
import Backdrop from '../UI/Backdrop'
import Loading from '../UI/Loading'
import SideDrawer from './SideDrawer'
import Bag from '../../pages/bag'
import {LookContext} from '../../store/context'
import BagItem from '../Items/BagItems'
import Login from '../Login/index'

const Navbar = ()=>{
  const Router = useRouter();
  const context = useContext(LookContext)
  const {signedIn,NofavItems,NobagItems,bagItems,
    bagNotification,admin,toggledrawer,closedrawer,sidedrawer:isOpen} = context
  
  const [search,setSearch] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const [searchInput,setSearchInput] = useState("")
  
  const handleChange = event => {
    setSearchInput(event.target.value)
  };
  const handleSearchToggle = ()=>{
    setSearch(prev => !prev)
  }
  const handleProfileClick = ()=>{
    if(signedIn){
      Router.push('/profile')
    }else{
      setShowLogin(true)
    }
  }
  const closeModal = ()=>{
    setShowLogin(false)
  }
  let adminRoutes = (<>
    <li onClick={closedrawer}>
        <Link href="/admin/addProduct"><a>Add Product</a></Link>
    </li>
    <li onClick={closedrawer}>
        <Link href="/admin/products"><a>Products</a></Link>
    </li>
  </>)

  if(!admin){
    adminRoutes=null
  }
  return (
    <div>
      <Modal show={showLogin} modalClosed={closeModal}><Login/></Modal>
      <Backdrop open={isOpen} onclick={toggledrawer}></Backdrop>
      
      <nav className="navbar">
          <div id="loading"><Loading area={15} ball={5} base={5} gap={11}/></div>
          <div className="nav-header">
            <button type="button" className="nav-btn" onClick={toggledrawer}>
              <FaAlignLeft size={25} className="nav-icon"/>
            </button>
            <Link href="/"><a><Logo className="logo" onClick={closedrawer}/></a></Link>
            <div className="nav-items">
            <input
                    type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={handleChange}
                    className={search?"search-form showsf":"search-form"}
                  />
              <FiSearch size={20} className={search?"search":"search shows"} onClick={handleSearchToggle}/>
              <a onClick={handleProfileClick} id="profile" className="profile"><FiUser size={20} />
                <span className="profile-hover">Profile</span>
              </a>
              <Link href="/favourite"><a className="fav"><FiStar size={20} />
                <span className="fav-hover">Favourite</span>
              </a></Link>
              <span className="favn">{NofavItems}</span>
              <span className="bag" onClick={()=>Router.push('/bag')}><FiShoppingBag size={20}/>
              {NobagItems===0?<span className="empty-bag-hover">Bag</span>:<div className="bag-hover" onClick={()=>Router.push('/bag')}><Bag hover={true}/></div>}
              </span>
              <span className="bagn">{NobagItems}</span>
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
              {adminRoutes}
            </ul>
          </div> 
          <div className={bagNotification?"bagNotification on":"bagNotification"} onClick={()=>Router.push('/bag')}>
            {bagNotification?
            <>
            
              <p className="notification-title"><span>Shopping Bag</span><BsBag style={{marginRight:"1rem"}} size={20}/></p>
              <BagItem
                hover={true}
                notification={true}
                item={bagItems[bagItems.length - 1].look} 
                size={bagItems[bagItems.length - 1].size}  
                setTotalPrice={()=>{}}/>
            </>:null}
          </div>
      </nav>
      <SideDrawer 
        open={isOpen} 
        handleToggle={toggledrawer}  
        setShowLogin={setShowLogin}/>
      <style global jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 0.1rem 0;
          background: rgb(250, 249, 248);
          z-index: 100;
        }
        #loading{
          display:none;
          position:absolute;
          top:2rem;
          right:0;
          margin-right:2.5rem;
          z-index:1000;
        }
        .nav-header{
          display:grid;
          grid-template-columns:1fr 50px 1fr;
          grid-template-rows:54.8px;
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
        .profile-hover,.fav-hover,.empty-bag-hover{
          display:none;
          position:absolute;
          height:1.5rem;
          padding:4px;
          top:2rem;
          left:-0.5rem;
          font-size:12px;
          font-family:GothamHTF-Book, sans-serif;
          background:black; 
          color:white;
        }
        .profile{
          grid-area:profile;
          position:relative;
        }
        .profile:hover .profile-hover{
          display:block;
        }
        .fav{
          grid-area:fav;
          position:relative; 
        }
        .fav:hover .fav-hover{
          display:block;
        }
        .favn{
          grid-area:favn;
        }
        .bag{
          grid-area:bag;
          position:relative;
          cursor:pointer;
        }
        .bag:hover .empty-bag-hover{
          display:block;
        }
        .bag:not(:focus):hover .bag-hover{
          height:400px;
        }
        .bag-hover{
          overflow:hidden;
          text-decoration:none;
          position:absolute;
          background:white;
          z-index:10000;
          top:1.5rem;
          right:0;
          transform:translate(8%,0);
          width:350px;
          height:0;
          transition: all 0.2s ease-in-out;
        }
        .bagn{
          grid-area:bagn;
        }
        .bagNotification{
          width:400px;
          height:250px;
          opacity:0;
          position:absolute;
          top:3rem;
          right:0;
          background:white;
          z-index:100;
          padding:1.5rem;
          padding-bottom:0;
          cursor:pointer;
          transition: all 0.2s ease-in-out;
          transform:translateX(100%);
        }
        .on{
          opacity:1;
          transform:translateX(0);
          transition: all 0.4s ease-in-out;
        }
        .notification-title{
          width:100%;
          display:flex;
          justify-content:flex-end;
          margin:0.7rem;
          align-items:center;
          font-size:20px;
          font-weight:600;
          font-family: 'Poppins', sans-serif;
          
        }
        .notification-title span{
          margin-right:1rem;
        }
        
        .search{
          position:relative;
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
          #loading{
            top:0.7rem;
          }
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
          padding:0.3rem;
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
          grid-template-columns: repeat(auto-fit,100px);
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
          cursor:pointer;
          color:black;
        }
      `}</style>
    </div>       
);
}

export default Navbar
