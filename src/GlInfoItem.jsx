import GaleryJS from './GaleryJS.json'
function GlInfoItem(props) {
    return (
        <div className="galery-info">
			<h1>{props.data.name}</h1>
           <h3 className='date'>Дата рождения: {props.data.date}</h3>
           <h3 className='path-gallery'>Пути:</h3>
           <p className='path'>
               {props.data.path}
           </p>
            <p className='view'>{props.data.bio}</p>
            <img src={props.data.poster_path} alt={props.data.name} className='img' />

          </div>
    );
}

export default GlInfoItem