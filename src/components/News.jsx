import NewsArticle from "./NewsArticle"
import {useState, useEffect} from "react"
import { SignIn, SignOut } from "./Auth"
import "./App.css"
export default function News({user}){
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        var requestOptions = {
            method: 'GET'
        };
        
        var params = {
            api_token: 'q96rPYbTqZ5I7lzaKbRC5OhxdDsbBQMVClJZ5NVi',
            search: 'Jesuits',
            limit: '10',
            published_after: '2024'
        };
        var esc = encodeURIComponent;
        var query = Object.keys(params)
        .map(function(k) {return esc(k) + '=' + esc(params[k]);})
        .join('&');
        fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
        .then(response => response.json())
        .then(result => setArticles(result.data))
        .catch(error => console.log('error', error));
        
    }, [])
    return(
        <div className="News">
            <h1> Today's Jesuit News Headlines</h1>
            <div className="NewsArticles">
                {articles ? (<NewsArticle news={articles[0]} />) : ""}
                {articles ? (<NewsArticle news={articles[1]} />) : ""}
                {articles ? (<NewsArticle news={articles[2]} />) : ""}
                {articles ? (<NewsArticle news={articles[2]} />) : ""}
            </div>
            {!user ? <SignIn /> : <SignOut />}
        </div>
    )
}