import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
            <h2>News Stack Top Headlines</h2>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <NewsItem title="My title" description="my desc"/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <NewsItem title="My title" description="my desc"/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <NewsItem title="My title" description="my desc"/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <NewsItem title="My title" description="my desc"/>
                </div>
            </div>  
        </div>
    )
  }
}

export default News
