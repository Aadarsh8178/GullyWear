import React, { useReducer, useEffect } from 'react';
import axios from 'axios'

import * as actionType from './actionType';

import items from '../data'

const initialState = {
    mainpage:null,
    looks:[],
    sortedLooks:[],
    featuredLooks:[],
    loading:true,
    type:'all',
    occasion:"all",
    price:0,
    minPrice:0,
    maxPrice:0,
    lowtohigh:false,
    hightolow:false,
    sidedrawer:false,
    filterApplied:false,
    signedIn:false,
    favouriteLooks:[],
    bagItems:[],
    NofavItems:0,
    NobagItems:0,
    deliveryPrice:100,
    freedelivery:1000,
    totalPrice:0,
    bagNotification:false,
    admin:false
}
const formatData = (items,favouriteLooks)=>{
    let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => {
            let img = {url:image.fields.file.url,
                price:image.fields.price,
                type:image.fields.item_type,
                link:image.fields.link,
                description:image.fields.description,
                slug:image.fields.slug,
            }
            return img
        })
        let look = {...item.fields,images,id,fav:Boolean(favouriteLooks.find(look => look.id===slug))};
        return look
    })
    return tempItems   
}
const handleSort = (state,name) =>{
    if(name=="high-low"){
        return {
            ...state,
            lowtohigh:false,
            hightolow:true
        }
    }
    else{
        return {
            ...state,
            lowtohigh:true,
            hightolow:false
        }
    }
}
const filterLooks = (state)=>{
    let {
        looks,
        type,
        price,
        occasion,
        minPrice,
        maxPrice,
        lowtohigh,
        hightolow
    } = state
    // all the looks
    let tempLooks = [...looks]
    //transform value
    price = parseInt(price)
    //filter by type
    if(type!=='all'){
        tempLooks = tempLooks.filter( look => {
            if(!look.type){
                return true
            }
            else {
                return look.type===type
            }
        })
    }
    //filter by occasion
    if(occasion!=='all'){
        tempLooks = tempLooks.filter(look => look.occasion===occasion)
    }
    //filter by price
    tempLooks = tempLooks.filter(look => look.price<=price)
    //filter by price sorting
    function compareasc(a,b){
        if(a.price>b.price) return 1;
        if(b.price>a.price) return -1;
        return 0;
    }
    function comparedsc(a,b){
        if(a.price<b.price) return 1;
        if(b.price<a.price) return -1;
        return 0;
    }
    if(lowtohigh){
        tempLooks.sort(compareasc)
    }
    if(hightolow){
        tempLooks.sort(comparedsc)
    }
    //change state
    return{
        ...state,
        sortedLooks:tempLooks
    }
}
const addtoFav = (state,look)=>{   
    let found = state.favouriteLooks.find(lk => lk.id===look.slug)
    if(found){
        return{
            ...state
        }
    }
    look.fav=true;
    let prevfav = JSON.parse(localStorage.getItem('favourites')||'[]')
    prevfav.push(look.slug)
    localStorage.setItem('favourites',JSON.stringify(prevfav))
    return {...state,
        NofavItems:state.NofavItems+1,
        favouriteLooks:state.favouriteLooks.concat({id:look.slug,look:look})
    }
}
const addtoBag = (state,look,size)=>{  
    let found = state.bagItems.find(item => item.id===look.slug&&item.size===size)
    if(found){
        return {...state};
    }
    let prevbag = JSON.parse(localStorage.getItem('bagItems')||'[]')
    prevbag.push({slug:look.slug,size:size})
    localStorage.setItem('bagItems',JSON.stringify(prevbag));
    return  {...state,
        NobagItems:state.NobagItems+1,
        bagItems:state.bagItems.concat({id:look.slug,look:look,size:size})
    }
}
const removeFav = (state,look,id)=>{
    look.fav=false;
    let prevfav = JSON.parse(localStorage.getItem('favourites')||'[]')
    let newfav = prevfav.filter(slug => slug!==id)
    localStorage.setItem('favourites',JSON.stringify(newfav))
    return {...state,
        NofavItems:state.NofavItems-1,
        favouriteLooks:state.favouriteLooks.filter(look => look.id!==id)}
}
const removeFromBag = (state,id,size)=>{
    let prevbag = JSON.parse(localStorage.getItem('bagItems')||'[]')
    let newbag = prevbag.filter(item => {
        if(item.slug===id&&item.size===size){
            return false
        }
        return true
    })
    localStorage.setItem('bagItems',JSON.stringify(newbag)) 
    return {
        ...state,
        NobagItems:state.NobagItems-1,
        bagItems:state.bagItems.filter(look => {
            if(look.id===id&&look.size===size){
                return false;
            }
            return true;
        })
    }
}

const reducer = (state,action)=>{
    switch(action.type){
        case actionType.TOGGLE_DRAWER: return {...state,sidedrawer:!state.sidedrawer}
        case actionType.CLOSE_DRAWER: return {...state,sidedrawer:false}
        case actionType.INIT_SETUP:return  {...state,...action.newState}
        case actionType.SORT:return handleSort(state,action.name)
        case actionType.FILTER_LOOKS:return filterLooks(state)
        case actionType.SLIDE:return {...state,[action.name]:action.value}
        case actionType.FILTER_APPLIED:return{...state,filterApplied:true}
        case actionType.FILTER_REMOVED:return{...state,filterApplied:false}
        case actionType.ADDTOFAV:return addtoFav(state,action.look)
        case actionType.REMOVEFAV:return removeFav(state,action.look,action.id)
        case actionType.ADDTOBAG:return addtoBag(state,action.look,action.size)
        case actionType.REMOVEFROMBAG:return removeFromBag(state,action.id,action.size)
        case actionType.AUTOFETCHFAVBAG:return {...state,NobagItems:action.bag.length,NofavItems:action.fav.length,favouriteLooks:action.fav,bagItems:action.bag}
        case actionType.SETFAVONLOOKS:return {...state,looks:action.looks}
        case actionType.BAGNOTIFICATION:return {...state,bagNotification:true}
        case actionType.BAGNOTIFICATIOFF:return {...state,bagNotification:false}
        case actionType.ADMINLOGGEDIN: return {...state,admin:true}
        case actionType.ADMINLOGOUT: return {...state,admin:false}
        default: return state
    }
}
const LookContext = React.createContext();
const LookProvider = (props)=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        (async function(){
            let looks = await formatData(items,state.favouriteLooks);
            let admin = await localStorage.getItem('AdminToken')?true:false
            let featuredLooks = looks.filter(look => look.featured===true)
            let mainpage = looks.find(look => look.type==="Main")
            let maxPrice = Math.max(...looks.map(item => item.price))
            let minPrice = Math.min(...looks.map(item => item.price))
            const addProp = {
                looks,
                sortedLooks:looks,
                featuredLooks,
                loading:false,
                price:maxPrice,
                maxPrice,
                minPrice,
                mainpage,
                admin
            }
            autofetchBagFav(looks)
            dispatch({type:actionType.INIT_SETUP,newState:addProp});
        }())
    },[])
    const autofetchFav = (looks)=>{
        let favs = JSON.parse(localStorage.getItem('favourites')||'[]')
        let initfav = []
        favs.map( slug =>{
            let cur = looks.find(look => look.slug===slug)
            if(cur){
                cur.fav=true 
                initfav.push({id:cur.slug,look:cur})
            }
        })
        
        return initfav
    }
    const autofetchBag = (looks)=>{
        let bag = JSON.parse(localStorage.getItem('bagItems')||'[]')
        
        let initbag = []
        bag.map( baglook =>{
            let cur = looks.find(look => look.slug===baglook.slug)
            if(cur){
                initbag.push({id:cur.slug,look:cur,size:baglook.size})
            }
        })
        return initbag
    }
    const autofetchBagFav=(looks)=>{
        const fav = autofetchFav(looks)
        const bag = autofetchBag(looks)
        dispatch({type:actionType.AUTOFETCHFAVBAG,fav,bag})
    }
    const getLook = (slug)=>{
        let tempLooks = [...state.looks];
        const look = tempLooks.find(look => look.slug===slug)
        return look
    }
    const handleSortClick = async (name)=>{
        await dispatch({type:actionType.SORT,name:name})
        await dispatch({type:actionType.FILTER_LOOKS})
        dispatch({type:actionType.FILTER_APPLIED});
    }
    const handleScroll = async (event) => {
        const target = event.target
        let value = target.value
        const name = event.target.name;
        await dispatch({type:actionType.SLIDE,name:name,value:value})
        await dispatch({type:actionType.FILTER_LOOKS})   
        dispatch({type:actionType.FILTER_APPLIED});
    }
    const adminLogin = async (email,password)=>{
        try{
            let data = await axios.post('http://localhost:8000/admin/login',{
                email,
                password
            })
            console.log(data.data)
            await localStorage.setItem('AdminToken',data.data.token)
            dispatch({type:actionType.ADMINLOGGEDIN})
            return false
        }catch(e){
            return true
        }
    }
    const adminLogout = async ()=>{
        try{
            let token = await localStorage.getItem('AdminToken')
            await axios.post('http://localhost:8000/admin/logout',{token})
            localStorage.removeItem('AdminToken')
            dispatch({type:actionType.ADMINLOGOUT})
            return false
        }catch(e){
            return true
        }
    }
    return (
        <LookContext.Provider value={{...state,
        getLook:getLook,
        handleScroll:handleScroll,
        handleChange:handleSortClick,
        toggledrawer:()=>dispatch({type:actionType.TOGGLE_DRAWER}),
        closedrawer:()=>dispatch({type:actionType.CLOSE_DRAWER}),
        addtoFav: (look)=>dispatch({type:actionType.ADDTOFAV,look}),
        removeFav: (look,id)=>dispatch({type:actionType.REMOVEFAV,look,id}),
        addtoBag:(look,size)=>{ 
            dispatch({type:actionType.BAGNOTIFICATION});
            setTimeout(()=>dispatch({type:actionType.BAGNOTIFICATIOFF}),2000)
            return dispatch({type:actionType.ADDTOBAG,look,size})
        },
        removeFromBag:(id,size)=>dispatch({type:actionType.REMOVEFROMBAG,id,size}),
        autofetchBagFav:(looks) =>autofetchBagFav(looks),
        adminLogin:(email,password) => adminLogin(email,password),
        adminLogout:adminLogout
        }}>
            {props.children}
        </LookContext.Provider>
    ) 
}
const LookConsumer = LookContext.Consumer;
export function withLookConsumer(Component){
    return function ConsumerWrapper(props){
        return <LookConsumer>
            {value => <Component {...props} context={value}/>}
        </LookConsumer>
    }
}

export{LookProvider,LookConsumer,LookContext};