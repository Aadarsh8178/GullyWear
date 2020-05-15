import React,{useContext} from 'react'
import {LookContext} from '../../store/context'

function BagHover() {
    const {bagItems} = useContext(LookContext)
    const items = bagItems.map( item =>{
        const {slug,images,price,description,brand,color}= item.look
        const size = item.size
        return (
            <div key={item.slug+item.size} className="item">
              <div className="card">
                <span>
                        <img 
                        className="img"
                        src={images[0].url}
                        alt="Unable to load"/> 
                </span> 
                <div className="side">
                    <div className="details">
                        <p className="desc">{description}</p>
                        <p className="price"><span>&#8377;</span>{price}</p>
                        <div className="small-details">
                            <p><span>Brand:</span><span>{brand}</span></p>
                            <p><span>Size:</span><span>{size}</span></p>
                            <p><span>Color: </span><span>{color}</span></p>
                        </div> 
                    </div>
                </div>
              </div>
              <style jsx>{`
                .item{
                    display:flex;
                    position:relative;
                    flex-direction:column;
                    align-items:flex-start;
                    margin-bottom:1rem;
                    width:100%;
                }
                .card{
                    display:flex;
                    width:100%;
                    font-family: 'Poppins', sans-serif;
                }
                .card a{
                    align-self:flex-end;
                }
                .img{
                    width:101px;
                    height:151.5px;
                }
                .side{
                    display:flex;
                    margin-top:12px;
                    margin-left:1rem;
                    flex-direction:column;
                    width: 199px;
                }
                .details p{
                    text-align:left;
                }
                .desc,.price{
                    width:100%;
                    font-size: 15px;
                    font-weight:500;
                    line-height: 20px;
                }
                .small-details{
                    text-align:left;
                    width:100%;
                    max-width:25rem;
                    margin-top:0.7rem;
                    font-size:13px;
                    font-weight:400;
                }
                
              `}</style>
            </div>
        )
    } )
    return (
        <div className="bagHover">
            <div className="bagItems">
                {items}
            </div>
            <div className="scroll-down"></div>
            <style jsx>{`
                .bagHover{
                    padding:1rem;
                    padding-right:0;
                    position:relative;
                    margin-right:0;
                }
                .bagItems{
                    margin-right:0;

                    width:300px;
                    height:300px;
                    
                    overflow-y: scroll;
                } 
                .scroll-down{
                    width:100%;
                    height:1.5px;
                    background:grey;
                }
            `}</style>
        </div>
    )
}

export default BagHover
