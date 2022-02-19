import {BrowserRouter, Route} from 'react-router-dom'
import {Routes, Link} from 'react-router-dom'
import GaleryJS from './GaleryJS.json'
function GaleryItem(props) {

    return (
        <Link 
            to={'/galery/' + props.data.id}
            state={props.data}
            className="movie-item" 
            id="item"
            >
            
          <img src={props.data.poster_path} className="gallery-img" alt={props.data.name} />

          <div className="text text-1">

              <div className="title_name">
              <h1 className='title'>{props.data.name} </h1>
              </div>

              </div>

          </Link>
    );
}

export default GaleryItem