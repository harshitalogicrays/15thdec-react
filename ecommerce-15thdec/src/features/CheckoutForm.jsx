import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) { return; }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret" );
    if (!clientSecret) { return;}
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {  return;}
    setIsLoading(true);

     await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
      },redirect:"if_required"
    }).then((result)=>{
      if(result.error){toast.error(result.error.message)
      return}
    if(result.paymentIntent){
      if(result.paymentIntent.status=='succeeded'){
        toast.success("payment done")
        setIsLoading(false)
        //save order 
      }
    }
    })

    setIsLoading(false);
  };

  const paymentElementOptions = { layout: "tabs"}

  return (
    <form id="payment-form" onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" options={paymentElementOptions} />
        <div class="d-grid gap-2">
           
      <button disabled={isLoading || !stripe || !elements} id="submit" className="btn btn-primary mt-3">
        <span id="button-text">
          {isLoading ? <div class="d-flex justify-content-center">
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div> : "Pay now"}
        </span>
      </button>
        </div>
        

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}