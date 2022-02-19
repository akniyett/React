import {BrowserRouter, Route} from 'react-router-dom'
import {Link, Routes} from 'react-router-dom'
import Galery from './Galery'
import Home from './Home'

function Aside() {
  return (
    <div className="aside">
      <aside>
          <div className="this-menu" id='this-menu'>
              <h3>Это меню</h3>
              <div className="left" id='left'>
                  <div className="radius" id='radius'></div>
              </div>
          </div>
        <nav>
          <ul>
            <li>
              <Link to="/home" className="link home">
                Это мы!
              </Link>
            </li>
            <li>
              <Link to="/galery" className="link">
                Галерея
              </Link>
            </li>
            <li>
              <Link to="/terminy" className="link">
                Термины
              </Link>
            </li>
            <li>
              <Link to="/map" className="link">
                Карта
              </Link>
            </li>
            <li>
              <Link to="/foto" className="link">
                Фотоальбом
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Aside
