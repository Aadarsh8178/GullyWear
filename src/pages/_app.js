import React from 'react';
import App from 'next/app';
import Router from 'next/router'
import Navbar from '../components/Navigation/Navbar'
import {LookProvider} from '../store/context'
import { PageTransition } from 'next-page-transitions'

Router.onRouteChangeStart = url => {
  document.getElementById('loading').style.display = 'inline'
}
Router.onRouteChangeComplete = () => document.getElementById('loading').style.display = 'none';
Router.onRouteChangeError = () => document.getElementById('loading').style.display = 'none';

class MyApp extends App {
  render() {
    const { Component, pageProps,router } = this.props;

    return (
      <LookProvider>
        <Navbar/>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route}/>
        </PageTransition> 
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
      background: rgb(250, 249, 248);
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      line-height: 1.4;
    }
    .page-transition-enter {
      transform:translateY(10%);
    }
    .page-transition-enter-active {
      transform:translateY(0);
      transition: all 300ms;
    }
    .page-transition-exit {
      opacity:0;
    }
    .page-transition-exit-active {
      opacity:0;
      transition: all 0;
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