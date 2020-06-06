import React,{useContext} from 'react'
import {useRouter} from 'next/router'

import {LookContext} from '../../store/context'
import Modal from '../../components/UI/Modal'
function products() {
    const {admin} = useContext(LookContext)
    const Router = useRouter()
    if(!admin){
        return (<Modal show={true}>
                <p 
                style={{margin:'2rem',textAlign:'center',cursor:'pointer'}}
                onClick={()=>Router.push('/')}>Not Allowed
                </p>
            </Modal>)
    }
    return (
        <div>
            products....
        </div>
    )
}

export default products
