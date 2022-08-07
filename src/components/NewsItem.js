import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} =this.props;
    return (
      <div>
        <div className="card m-3" style={{width:'18rem'}}>
            <img src={imageUrl?imageUrl:"https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/10/Tesla-Autopilot-Radar-e1603395743425.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"} className="card-img-top" height={'250px'} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
