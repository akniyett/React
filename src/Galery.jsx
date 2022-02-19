import GaleryItem from './GaleryItem'
import GaleryJS from './GaleryJS.json'
import {useState, useEffect} from 'react'
function Galery() {
  const [galery, setGalery] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ildarika/json-/main/GaleryJS.json')
        .then(res => res.json())
        .then(data => {
          setGalery(data)
        })
      },[]);
    return (
        <div className="galery">
        <h3 className="new">Галерея</h3>
        {
          galery.map(item => (
            <GaleryItem data={item} key={item.id}/>
          ))
        }
          </div>
    );
}

export default Galery