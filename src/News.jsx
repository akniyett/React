import NewsJS from './NewsJS.json'
import NewsItem from './NewsItem'
import {useEffect, useState} from 'react'

function News() {

    const [news, setNews] = useState(NewsJS);


    useEffect(() => {
        fetch('NewsJS.json')
        .then(res => res.json())
        .then(data => {
          setNews(data)
        })
      },{news});

      
    return (
        <div className="news">
            <h3>Новости</h3>
            {
          news.map(base => (
            <NewsItem data={base} key={base.id}/>
          ))
        }
        </div>
    )
}

export default News