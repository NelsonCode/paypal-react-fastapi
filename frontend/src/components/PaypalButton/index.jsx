import React, { useEffect } from "react";
import axios from "axios";
import products from "../../products.json";

function PaypalButton() {
  function renderPaypalButton() {
    paypal
      .Buttons({
        createOrder: async ()=> {
            try {
              const response = await axios({
                url: "http://localhost:8000/create-order",
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                data: products
            })
            return response.data.id
            } catch (error) {
              console.log(error);
            }
        },
        onCancel: function (data) {
          console.log("Compra cancelada");
        },
        onApprove: function (data, actions) {
          console.log(data);
          return actions.order.capture();
        },
      })
      .render("#paypal-button-container");
  }
  useEffect(() => {
    renderPaypalButton();
  }, []);
  return (
    <div>
      <div id="paypal-button-container"></div>
    </div>
  );
}

export default PaypalButton;
