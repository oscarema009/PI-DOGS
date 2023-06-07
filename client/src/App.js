import {Route} from 'react-router-dom'
import Home from './components/Home';
import  LandinPage  from './components/LandinPage'
import DogCreate from './components/DogCreate'
import DetailPage from './components/DetailPage'


function App() {
  return (
   
   <>
      <div className="App">
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route path='/dog'>
          <DogCreate/>
        </Route>
        <Route exact path='/'>
          <LandinPage/>
        </Route>
        <Route exact path='/dogs/:id'>
          <DetailPage/>
        </Route>
      </div>
    </>
    
  );
}

export default App;

