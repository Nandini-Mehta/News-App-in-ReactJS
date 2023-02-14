import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description,ImageUrl,newsUrl,author, date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:1}}>
            {source}</span>
            
        <img src={!ImageUrl?"https://i.guim.co.uk/img/media/3b659d294ebc3927cc71e406dcd3838bdb833174/233_421_1996_1198/master/1996.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1f08ea0070397bb58878d281d7978b30":ImageUrl}className="card-img-top" alt="..." />
        <div className="card-body">
        
      
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-success">By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem