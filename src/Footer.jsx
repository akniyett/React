import {BrowserRouter, Route} from 'react-router-dom'
import {Link, Routes} from 'react-router-dom'

function Footer() {
    return(
        <div className="footer">
            <footer>
                <div className="box box-1">
                    <img src="https://i.ibb.co/58X5qn1/IMG-20220214-WA0091.jpg" alt="" className="footer-img" />
                    <h3 className="info">GeoYm</h3>
                </div>
                <div className="aftor">
                    <hr className="f-hr" />
                    <p>©2021-2022 Sufiyarova Lyudmila</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer