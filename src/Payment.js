import React, { useState, useEffect }  from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer'
import axios from './axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
    	// generate the stripe secret which will allow us to charge a costumer
    	const getClientSecret = async () => {
    		const response = await axios({
    			method: 'post',
    			// stripe needs the total in currencies subunits 
    			url: `/payments/create?total=${getBasketTotal(basket) * 100}`
    		});
    		setClientSecret(response.data.clientSecret)
    	}
    	    getClientSecret();
    }, [basket])

     console.log('THE SECRET IS >>>', clientSecret)


    const handleSubmit = async (e) => {
        // these will be function for the submit of transaction 
        e.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
        	payment_method: {
        		card: elements.getElement(CardElement)
        	}
        }).then(({ paymentIntent }) =>  {
        	// payment Intent = payment confirmation 
        	
        	setSucceeded(true);
        	setError(null)
        	setProcessing(false)

        	history.replace('/orders')
        })
    }

    const handleChange = e => {
        // Listen for change in the CardElement then display any errors
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
			<div className='payment_container' >
				<h1>
					Checkout (
					<Link to='/checkout'>{basket?.length} items 
						
					</Link>)
				</h1>


			{/*Payment section -delivery address*/}

				<div  className='payment_section' >
					<div className='payment_title'> 
						<h3>Delivery Address</h3>
					</div>
				<div className="payment_address">
					<p>{user?.email}</p>
					<p>123 javascript lane </p>
					<p>Los Angeles, CA</p>
				</div>
					
				</div>


			{/*Payment section - Review items*/}

				<div  className='payment_section' >
					<div className='payment_title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment_items'>
						{basket.map(item => (
							<CheckoutProduct 
								id = {item.id}
								title = {item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

			{/*Payment section - Payment method*/}

				<div  className='payment_section' >
					<div clasName='payment_title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment_details' >
						{/*release the stripe power */}

						<form onChange={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className='payment_priceContainer'>
								        <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded }>
                                    	<span> 
                                    		{processing ? <p>Processing </p> : "Comlpete Order"}
                                    	</span>
                                    </button>
							</div>
						{/*errors */}
						{error && <div>{error}</div>}
						</form>
					</div>
				</div>

			</div>
		</div>
    )
}

export default Payment