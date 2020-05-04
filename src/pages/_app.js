import React from 'react';
import App from 'next/app';

import Navbar from '../components/UI/Navbar'
import {LookProvider} from '../store/context'

class MyApp extends App {
  render() {
    const { Component, pageProps,router } = this.props;

    return (<LookProvider>
      <Navbar/>
       <Component {...pageProps} key={router.route}/>
    <style jsx global>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    /* globals */
    body {
      padding-top:85px;
      color: #222;
      background: white;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      line-height: 1.4;
    }
    .btn-primary {
      display: inline-block;
      text-decoration: none;
      background:transparent;
      color:white;
      font-family: 'Open Sans Condensed', sans-serif;
      font-size:11px;
      padding: 0.5rem 1.5rem;
      border: white 2px solid;
      transition: all 0.3s linear;
      text-transform: uppercase;
      cursor: pointer;
    }
    .btn-primary:hover {
      
      font-weight:bold;
    }
    @media screen and (max-width:768px){
      body{
        padding-top:58px;
      }
    }
  `}</style>
      </LookProvider>)
  }
}

export default MyApp;