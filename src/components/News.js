// import React, { Component } from 'react'
import React , {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
const News =  (props)=> {
    
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState([true])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = capatalizeFirstLetter(this.props.category) + "-News Stack";

    // static defaultProps = {
    //     country: 'in',
    //     pageSize: 6,
    //     category: 'general'
    // }
    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,
    // }
    const capatalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // constructor(props){
    //   super(props);
    // //   this.state = {
    // //     //articles: this.articles,
    // //     articles: [],
    // //     loading: true,
    // //     page:1,
    // //     totalResults:0
    // //   }
    //   document.title = this.capatalizeFirstLetter(this.props.category) + "-News Stack";
    // }

    // async updateNews (){
    //     this.props.setProgress(10);
    //     const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     this.props.setProgress(30);
    //     let parseData = await data.json();
    //     this.props.setProgress(70);
    //     this.setState({
    //         articles: parseData.articles, 
    //         totalResults:parseData.totalResults, 
    //         loading:false
    //     })
    //     this.props.setProgress(100);
    // }

    const updateNews = async ()=>{
        props.setProgress(10);
        const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(()=>{
        updateNews();
    }, [])

    // async componentDidMount(){
    //     // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0fc2065dd0d4ced969d2d7cae8df8c9&page=1&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading: true});
    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // this.setState({
    //     //     articles: parseData.articles, 
    //     //     totalResults:parseData.totalResults, 
    //     //     loading:false
    //     // })
    //     this.updateNews();
    // }

    // fetchMoreData = async () => {
    //     this.setState({page : this.state.page +1});
    //     const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     this.setState({ 
    //         articles: this.state.articles.concat(parseData.articles), 
    //         totalResults:parseData.totalResults, 
    //         // loading:false
    //     })
    // }

    const fetchMoreData = async () => {
        const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    };

    // handlePrevClick = async ()=>{
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0fc2065dd0d4ced969d2d7cae8df8c9&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading: true});
    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // this.setState({
    //     //     page: this.state.page -1,
    //     //     articles: parseData.articles,
    //     //     loading: false
    //     // })
    //     this.setState({
    //         page: this.state.page -1,
    //     });
    //     this.updateNews();
    // }

    // handleNextClick = async ()=>{
    //     // if (!( this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0fc2065dd0d4ced969d2d7cae8df8c9&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    //     //     this.setState({loading: true});
    //     //     let data = await fetch(url);
    //     //     let parseData = await data.json();
    //     //     this.setState({
    //     //         page: this.state.page +1,
    //     //         articles: parseData.articles,
    //     //         loading: false
    //     //     })
    //     // }
    //     this.setState({
    //         page: this.state.page + 1,
    //     })
    //     this.updateNews();
    // }


//   render() {
    return (
    //   <>
    //         <h2 className='text-center my-4'>News Stack - Top Headlines On {this.capatalizeFirstLetter(this.props.category)}</h2>
    //         {this.state.loading && <Spinner/>}
    //         <InfiniteScroll
    //             dataLength={this.state.articles.length} //This is important field to render the next data
    //             next={this.fetchMoreData}
    //             hasMore={this.state.articles.length !== this.state.totalResults}
    //             loader= {<Spinner/>}
    //         >
    //         <div className="container">
    //         <div className="row">
    //             {/* {!this.state.loading && this.state.articles.map((element)=> {
    //                 return <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={element.url}>
    //                     <NewsItem  title={element.title?element.title.slice(0,38):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
    //                 </div>
    //             })} */}
    //             {this.state.articles.map((element)=> {
    //                 return <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={element.url}>
    //                     <NewsItem title={element.title?element.title.slice(0,38):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
    //                 </div>
    //             })}
    //         </div>
    //         </div>
    //         </InfiniteScroll>
    //         {/* <div className="container d-flex justify-content-between">
    //             <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Prev</button>   
    //             <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>   
    //         </div>  */}
    //     </>
        <>
        <h2 className='text-center' style={{margin:"100px 0px 30px"}}>News Stack - Top Headlines On {capatalizeFirstLetter(props.category)}</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader= {<Spinner/>}
        >
        <div className="container">
        <div className="row">
            {articles.map((element)=> {
                return <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,38):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
                </div>
            })}
        </div>
        </div>
        </InfiniteScroll>
    </>
    )
//   }
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
