import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize : 8,
        category : 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize : PropTypes.number,
        category : PropTypes.string
    }
    constructor(props)
    {
        super(props);
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
        document.title = `${this.props.category} | News`;
    }

    async updateNews()
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true});
        let data= await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        });
    }
    async componentDidMount(){
        this.updateNews();
    }

    handlePrevclick= async()=>{
        this.setState({page : this.state.page -1});
        this.updateNews();
    };

    handleNextclick= async()=>{
        this.setState({page : this.state.page+1});
        this.updateNews();
    };

  render(){
    return (
      <div className='container my-3'>
      <h1 className='text-center' style={{marginTop: '80px'}}>Top Headlines</h1>
      {this.state.loading && <Spinner />}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return(
                <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0, 100):""} ImageUrl={element.urlToImage} newsUrl={element.url} author= {element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
            )
        })}     
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevclick}>Prev</button>
        <button disabled={!this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark " onClick={this.handleNextclick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News         