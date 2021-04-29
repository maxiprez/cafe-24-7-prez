import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Products from './containers/ProductPage/ProductPageContainer';
//import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemCategoryContainer from './containers/ItemCategoryContainer/ItemCategoryContainer';



class App extends Component {

render(){
return(
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home
                titulo='Cosechando el mejor café para vos desde 1989'
                descripcion='24/7 es una empresa familiar de Argentina, que le brinda a sus cliente el mejor café nacional desde hace más de 30 años.'
                                      />
          </Route>

         
          <Route exact path="/products">
            <Products />
          </Route>

          <Route path="/products/:categoryId">
            <ItemCategoryContainer />
          </Route>

          <Route  path="/item/:itemId">
            <ItemDetailContainer /> 
          </Route> 
                
        
        </Switch>
        <Footer />
      </Router>   
    </div>
    );
  }
}

export default App;
