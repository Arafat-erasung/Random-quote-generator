import React from "react";
import './App.css';
import axios from 'axios';


class App extends React.Component {
        
    state = { 
        quote: '',
        author: ''
            }
                
    componentDidMount() {
        this.fetchQuote();
    }


    fetchQuote = () => {
        const apiUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        const randomQuoteIndex = Math.floor(Math.random() * 102)
        axios.get(apiUrl).then((response) => {
                const getQuote = response.data.quotes[randomQuoteIndex].quote;
                const getAuthor = response.data.quotes[randomQuoteIndex].author;
                

                this.setState({
                    quote: getQuote,
                    author: getAuthor

                })
        }).catch((error) => {
                console.log(error);
        });
    }

    render(){
        return (
            <div className="app">
                <div className="box">
                    <div className="quote">
                        <h1 className="t-quote">{this.state.quote}</h1>
                        <span className="author">{this.state.author}</span>
                        <button className="new-quote" onClick={this.fetchQuote}>Get New Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;