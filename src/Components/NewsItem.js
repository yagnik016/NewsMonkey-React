
import React from 'react'

export default function NewsItem(props) {


  
    let {title, description,imageUrl,newsUrl,author,date, source} = props
    return (
      <div className='my-3'>
<div className="card" >
  <div style={{display:'flex',
position:'absolute',
justifyContent:'center',
right:0}}>
<span className=' badge rounded-pill bg-danger' >{source}</span>
</div>
  <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2023/06/20/1600x900/modi_us_state_visit_china_overreach_1687233935155_1687233941978.png"} className="card-img-top" alt="..."/>
  <div className="card-body bg-black text-white">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description?description:"PLA's action in East Ladakh, the growing threat over Taiwan and in South China Sea and B..."}...</p>
    <p className='card-text'><small >By-{author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='blank' className="btn btn-sm btn-success">Read More</a>
  </div>
</div>    
  </div>
    )
  
    }
  

