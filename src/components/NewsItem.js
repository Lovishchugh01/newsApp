import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} =this.props;
    return (
      <div>
        <div className="card m-3" >
            <img src={imageUrl?imageUrl:"https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/10/Tesla-Autopilot-Radar-e1603395743425.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"} className="card-img-top" height={'250px'} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}... <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}</span></h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
