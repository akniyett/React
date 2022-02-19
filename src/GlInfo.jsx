import GaleryJS from './GaleryJS.json'
import {Link, useParams, useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import GlInfoItem from './GlInfoItem'


function GlInfo(props) {
	// const location  = useLocation();
  const {state} = useLocation();
    return (
            <div className="galery-info">
        {
          <GlInfoItem data={state}/>
        }
          </div>
    )
}

export default GlInfo