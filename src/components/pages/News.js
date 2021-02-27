import React, { Component } from 'react';
import axios from 'axios';
class News extends Component {
    constructor(){
        super();
        this.state={
            articles:[]
       
        }
    }
    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=Apple&from=2021-02-26&sortBy=popularity&apiKey=02c9f0ef11b24309806a296c647af7dd')
            .then(response=>{
                console.log(response.data);
                this.setState({articles:response.data.articles});


            })
            .catch(error=>{
                //console.log(error);
                this.setState({error:error});
            });
    }
    render() {

        const articles=this.state.articles;

        const shownews=articles.map((article)=>
            <><h1>{article.title}</h1>
            <small>Author: {article.author}</small>
            <p>{article.description}</p>
            </>
        );
        
        return (
            <section className="sec min-height">
                <div className="inner-wrapper">
                        {shownews}   
                </div>
            </section>
        );
    }
}

export default News;