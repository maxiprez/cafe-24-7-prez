import React from 'react';
import NavBar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import Products from '../../containers/ProductPageContainer/ProductPageContainer';
import ItemCategoryContainer from '../../containers/ItemCategoryContainer/ItemCategoryContainer';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import CartPageContainer from '../../containers/CartPageContainer/CartPageContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OrderPage from '../../components/OrderPage/OrderPage';
import Contact from '../../components/Contact/Contact';
import Company from '../../components/Company/Company';


export default function AppRouter() {
    return (
       <Router>
           <NavBar />
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
                      
                <Route path ="/cart" >
                  <CartPageContainer />
                </Route>

                <Route path="/checkout">
                  <OrderPage />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>

                <Route path="/company">
                  <Company />
                </Route>

                </Switch>
           <Footer />
       </Router>
    )
}
