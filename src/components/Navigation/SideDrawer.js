import React from 'react'
import Link from 'next/link'

export default function SideDrawer(props) {
    return (
        <div className={props.open?"sidebar open":"sidebar"}>
            <div className="content show">
                    <div className="visible-xs">
                        <ul className="mobile-menu">
                            <li>
                                <Link href="/"><div><a onClick={props.handleToggle}>Home</a></div></Link>
                            </li>
                            <li>
                                <Link href="/looks"><div><a onClick={props.handleToggle}>Looks</a></div></Link>
                            </li>
                            <li>
                                <Link href="/footwear"><div><a onClick={props.handleToggle}>Footwear</a></div></Link>
                            </li>
                            <li>
                                <Link href="/apparel"><div><a onClick={props.handleToggle}>Apparel</a></div></Link>
                            </li>
                            <li>
                                <Link href="/markdowns"><div><a onClick={props.handleToggle}>Markdowns</a></div></Link>
                            </li>
                        </ul>
                    </div>
                <div className="item">
                    <ul>
                        <li>
                            <div><a onClick={()=> {props.setShowLogin(true); props.handleToggle()}}>Sign in/join</a></div>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <ul>
                        <li>
                            <Link href="/about"><div><a onClick={props.handleToggle}>About Us</a></div></Link>
                        </li>
                        <li>
                            <Link href="/returns"><div><a onClick={props.handleToggle}>Return/Exchange</a></div></Link>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <ul>
                        <li>Follow us on</li>
                        <li className="social">

                        </li>
                    </ul>
                </div>
            </div>
    <style jsx>{`
        .open{
            width:270px!important;
        }
        .sidebar {
            z-index:1000;
            position:fixed;
            top:77px;
            left:0;
            height:100%;
            width:0;
            -webkit-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
        }
        @media screen and (max-width:768px){
            .sidebar{
                top:45px;
            }
        }
        .content {
            display:grid;
            padding-top:1.5rem;
            grid-template-columns:270px;
            grid-auto-rows:max-content;
            font-size: 11px;
            text-indent: 30px;
            background: white;
            overflow: hidden;
            height: 100%;
            width:0;
            -webkit-transition: inherit;
            transition: inherit;
        }
        @media screen and (max-width: 48em)
        .content {
            text-indent: 10px;
            overflow-y: auto;
        }
        .show{
            width:100%;
        }
        .visible-xs {
            display: none!important;
        }
        @media screen and (max-width: 768px){
        .visible-xs {
            display: block!important;
            margin-top:5px;
        }
        }
        .content ul li {
            padding: 10px 0;
            font-weight:400;
            font-size:15px;
        }
        .content .mobile-menu {
            border-bottom: 2px solid #f6f6f6;
            padding-bottom: 10px;
        }
        .item {
            margin-top:5px;
            border-bottom: 2px solid #f6f6f6;
            padding-top: 15px;
            padding-bottom: 15px;
        }
        li{
            list-style:none;
        }
        a{
            text-decoration:none;
            text-align:right;
            color:rgb(122, 122, 122);
            font-size:15px;
            font-weight:400;
            font-family:GothamHTF-Book, sans-serif;
            transition:0.2s ease-in-out;
        }
        a:hover{
            cursor:pointer;
            color:black;
            font-size:16px;
            font-weight:bold;
            transition:0.2s ease-in-out;
        }
        .mobile-menu{
            display:grid;
        }
        
    `}</style>
        </div>
    )
}