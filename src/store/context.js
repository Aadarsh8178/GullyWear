import React, { useReducer, useEffect } from 'react';
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
    favoriteLooks:[],
    bagItems:[],
    NofavItems:0,
    NobagItems:0,
    deliveryPrice:100,
    freedelivery:1000
}
const formatData = (items,favoriteLooks)=>{
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
        let look = {...item.fields,images,id,fav:Boolean(favoriteLooks.find(look => look.id===slug))};
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
const fetchFav = ()=>{
    //Implement fetching of favuorite items from server,, Ids are fetched then corresponding look data 
    // added to temp array returned
    return []
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
    look.fav=true;
    return {...state,
        NofavItems:state.NofavItems+1,
        favoriteLooks:state.favoriteLooks.concat({id:look.slug,look:look})
    }
}
const addtoBag = (state,look,size)=>{   
    return  {...state,
        NobagItems:state.NobagItems+1,
        bagItems:state.bagItems.concat({id:look.slug,look:look,size:size})
    }
}
const removeFav = (state,look,id)=>{
    console.log('called')
    look.fav=false;
    return {...state,
        NofavItems:state.NofavItems-1,
        favoriteLooks:state.favoriteLooks.filter(look => look.id!==id)}
}
const removeFromBag = (state,id)=>{
    return {
        ...state,
        NobagItems:state.NobagItems-1,
        bagItems:state.bagItems.filter(look => look.id!==id)
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
        case actionType.SET_FAV:return {...state,favoriteLooks:action.payload}
        case actionType.ADDTOBAG:return addtoBag(state,action.look,action.size)
        case actionType.REMOVEFROMBAG:return removeFromBag(state,action.id)
        default: return state
    }
}
const LookContext = React.createContext();
const LookProvider = (props)=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        (async function(){
            let favLoooks = await fetchFav()
            await dispatch({type:actionType.SET_FAV,payload:favLoooks})
            let looks = await formatData(items,state.favoriteLooks);
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
                mainpage
            }
            
            dispatch({type:actionType.INIT_SETUP,newState:addProp});
        }())
    },[])

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
    
    return (
        <LookContext.Provider value={{...state,
        getLook:getLook,
        handleScroll:handleScroll,
        handleChange:handleSortClick,
        toggledrawer:()=>dispatch({type:actionType.TOGGLE_DRAWER}),
        closedrawer:()=>dispatch({type:actionType.CLOSE_DRAWER}),
        addtoFav: (look)=>dispatch({type:actionType.ADDTOFAV,look}),
        removeFav: (look,id)=>dispatch({type:actionType.REMOVEFAV,look,id}),
        addtoBag:(look,size)=>dispatch({type:actionType.ADDTOBAG,look,size}),
        removeFromBag:(id)=>dispatch({type:actionType.REMOVEFROMBAG,id})
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