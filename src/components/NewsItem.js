import React from 'react'

const NewsItem=(props)=> {
   

let {title,description,imageUrl,newsUrl}=props;

    return (
     
        <div className="card mx-3" >
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>{title}...</strong></h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} className="btn btn-primary">Read more</a>
  </div>
</div>
      
    )
  }


export default NewsItem
