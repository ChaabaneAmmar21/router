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
     <div> <iframe width="560" height="315" src={pd.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
     <Link to="/"><h1 style={{color:"red",fontStyle:"italic"}}>go to list produt</h1></Link>

      
    </div>
  )
}

export default ProductDetails