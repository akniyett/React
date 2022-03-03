import {BrowserRouter, Route} from 'react-router-dom'
import {Routes, Link} from 'react-router-dom'
import NewsJS from './NewsJS.json'
function NewsItem(props) {

    console.log(props.data.name);
    return (
        <Link to={'/news/' + props.data.id} 
            className="foto-item" 
            id="item"
            // onClick={console.log(props.data.id)}
            state={props.data}
            >
            
            <img src={props.data.img} title={props.data.name} className="news-img" alt={props.data.name} />
            <div className="text text-1">
            <div className="title_name">
            <h1 className='title'>{props.data.name} </h1>
            </div>
            </div> 
        </Link>

    );
}

export default NewsItem