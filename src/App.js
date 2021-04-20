import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
//import CounterContainer from './containers/CounterContainer';
import ItemListContainer from './containers/ItemListContainer';

class App extends Component {

render(){
return(
    <div>
      <Navbar />
      <Home
          titulo='Cosechando el mejor café para vos desde 1989'
          descripcion='24/7 es una empresa familiar de Argentina, que le brinda a sus cliente el mejor café nacional desde hace más de 30 años.'
                                />
       <ItemListContainer />
    </div>
    );
  }
}

export default App;
