import React from 'react';
import orderData from '../order-data.json'


export const Order =(props) =>{
  const [orders, setOrders] = React.useState([orderData.orders]);

  // fetch order data from the api

  // React.useEffect(()=>{
  //   fetch("api of orders")
  //   .then(response => response.json())
  //   .then(data => setOrders(data))
  // },[])

  // function to format the date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-EG')
  }
  const allOrders = orders.map((order)=> {
      // check if the user who ordered is equal to the user who logged in
    if(order && props.user === order.user){
      return (
        <section className='order'>
          <div className='order--header'>
            <p className='order--id'><span className='date-text'>order</span> #{order._id}</p>
            <p className='order-date'><span className='date-text'>placed on:</span> {formatDate(order.createdAt)}
            </p>
          </div>
          {
            order.orderItems.map((item) =>{
              return(
                <div className='ordered--products'>
                  <div className='ordered--product'>
                    <div className='ordered--image'>
                      <img
                        className='product--image'
                        src={item.gallery[0]}
                        alt={item.name}
                      />
                    </div>
                    <div className='ordered--product-info'>
                      <h5 className='product--info-name'>
                        {item.name}
                      </h5>
                      <p className='product--info-quantity'>
                        {item.quantity} Q
                      </p>
                    </div>
                    <p className='product--info-price'>
                      {item.price} 🇪🇬 
                    </p>
                  </div>
                </div>
              );
            })
          }
          <div className='order--total'>
            <h4>Total</h4>
            <p className='total--products'>
              {order.total}
            </p>
          </div>
        </section>
      )
    }else {
      return (
        <section className='order'>
          <h2 className='order--heading'>
            NO ORDER YET !
          </h2>
        </section>
      )
    }
    
  });

  return(
    <>
     {allOrders}
    </>
  );
}