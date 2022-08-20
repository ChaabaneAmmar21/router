import React from 'react'
import {useParams,Link}from 'react-router-dom'
const ProductDetails = ({data}) => {
  const {id} =useParams()
  const pd=data.find(
    (el)=>el.id==id
  )
  console.log(pd)
  return (
    <div style={{display:"block" , textAlign:"center" , backgroundColor:"Window"}}>
     <h1> {pd.title} </h1>
      <img src={pd.posterURL} height="360px" alt=""/>
     <h4> {pd.description}</h4>
     <Link to="/"><h1 style={{color:"red",fontStyle:"italic"}}>go to list produt</h1></Link>

      
    </div>
  )
}

export default ProductDetails