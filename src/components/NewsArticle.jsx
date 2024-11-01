import "./App.css"
export default function NewsArticle({news}){
    return(
        <div className="Article">
            <a href={news.url}><h4> {news.title}</h4></a>
            <img src={news.image_url} />
            <p>{news.description}</p>
        </div>
    )
}