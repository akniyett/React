import Info from './Info';
import Main from './Main';

import {Link, Route, Routes} from 'react-router-dom'
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path='/news/:id' element={<Info/>}/>
    </Routes>
  );
}

export default App;
