import NewsJS from './NewsJS.json'
import { useLocation } from 'react-router-dom'
import InfoItem from './InfoItem'


function Info() {
  const location = useLocation();
  const state = location.state;
  console.log(state);
    return (
            <div className="galery-info">
        {
          <InfoItem data={state} />
        }
          </div>
    )
}

export default Info