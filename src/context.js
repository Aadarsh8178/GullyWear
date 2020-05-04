import React, { Component } from 'react'
import items from './data'

const LookContext = React.createContext();

class LookProvider extends Component {
    state={
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
        sidedrawer:false
    };
    toggledrawer= ()=>{
        this.setState({sidedrawer:!this.state.sidedrawer})
    }
    closedrawer=()=>{
        this.setState({sidedrawer:false})
    }
    componentDidMount(){
        let looks = this.formatData(items);
        let featuredLooks = looks.filter(look => look.featured===true)
        let mainpage = looks.find(look => look.type==="Main")
        let maxPrice = Math.max(...looks.map(item => item.price))
        let minPrice = Math.min(...looks.map(item => item.price))
        this.setState({looks,
            sortedLooks:looks,
            featuredLooks,
            loading:false,
            price:maxPrice,
            maxPrice,
            minPrice,
            mainpage
        })
    }
    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => {
                let img = {url:image.fields.file.url,
                    price:image.fields.price,
                    type:image.fields.item_type,
                    link:image.fields.link,
                    description:image.fields.description
                }
                
                return img
            })
            let look = {...item.fields,images,id};
            return look
        })
        return tempItems   
    }
    getLook = (slug)=>{
        let tempLooks = [...this.state.looks];
        const look = tempLooks.find(look => look.slug===slug)
        return look
    }
    handleChange = (name) =>{
        if(name=="high-low"){
            this.setState({
                lowtohigh:false,
                hightolow:true
            },this.filterLooks)
        }
        else{
            this.setState({
                lowtohigh:true,
                hightolow:false
            },this.filterLooks)
        }
    }
    handleScroll = event => {
        const target = event.target
        let value = target.value
        const name = event.target.name;
        
        this.setState({
            [name]:value
        },this.filterLooks)
        
    }
    filterLooks = ()=>{
        let {
            looks,
            type,
            price,
            occasion,
            minPrice,
            maxPrice,
            lowtohigh,
            hightolow
        } = this.state
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
        this.setState({
            sortedLooks:tempLooks
        })
    }
    render() {
        return (
            <LookContext.Provider value={{...this.state,
            getLook:this.getLook,
            handleScroll:this.handleScroll,
            handleChange:this.handleChange,
            toggledrawer:this.toggledrawer,
            closedrawer:this.closedrawer}}>
                {this.props.children}
            </LookContext.Provider>
        )
    }
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