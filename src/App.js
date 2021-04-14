import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends Component {

render(){
return(
    <div>
      <Navbar />
      <ItemListContainer 
          greeting='Cosechando el mejor café para vos desde 1989'
          bannerP='24/7 es una empresa familiar de Argentina, que le brinda a sus cliente el mejor café nacional desde hace más de 30 años.'
      />
    </div>
    );
  }
}

export default App;
