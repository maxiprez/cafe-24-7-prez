import React from 'react'
import './CartPageContainer.css'
import { useHistory } from 'react-router-dom';



export default function CartPageContainer() {
    const history = useHistory();
    return (
        <div className="text-center">
            <h1 className="cart-page-container__title">En construcción 👷🏼</h1>
            <button className="btn btn-primary btn-lg btn-back-to-products" onClick={() => history.push('/products')}>Volver a tienda</button>
        </div>
    )
}
