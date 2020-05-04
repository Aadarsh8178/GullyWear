import React from 'react'
import loadingGif from '../../../public/static/images/gif/loading-arrow.gif'
const Loading = () => {
    return (
        <div className="loading">
            <h4>Looks data loading...</h4>
            <img src={loadingGif}/>
        </div>
    )
}

export default Loading