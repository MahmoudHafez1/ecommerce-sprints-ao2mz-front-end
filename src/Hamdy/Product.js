import React from 'react';
import {useParams} from 'react-router-dom';
import { BsCart4} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from '../Hafez/store/actions/cart';

function Product(props) {
    const [product, setProduct] = React.useState({});
    const dispatch =useDispatch();
    const params = useParams();
    React.useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then((response) =>response.json())
        .then(response => setProduct(response))
    },[params]);
    return (
        <>

            <section className='product'>
                <div className='product--image'>
                    <img 
                        className='image'
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <div className='product--info'>
                    <h2 className='info--title'>
                        {product.title}
                    </h2>
                    <p className='info--description'>
                        {product.description}
                    </p>
                    <div className='btns'>
                        <p className='product--price'>
                            {product.price} EGP
                        </p>
                        <button 
                            className='btn btn--cart'
                            onClick={() => dispatch(addToCart(product.id))}
                        >
                            <span className='btn--text'>Add To Cart </span>
                            {<BsCart4/>}
                        </button>
                    </div>
                </div>
                
            </section>
            
            
            {/**
             * Comment section as a react component
             */}
        </>
    );
}

export default Product;