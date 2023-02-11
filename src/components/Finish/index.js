import React, { useState, useEffect } from "react";
import "./Finish.scss";

const Finish = () => {
  let dataPayment = JSON.parse(localStorage.getItem("payment"));
  function generateRandomString() {
    let characters = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let randomString = "";

    for (let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }

    return randomString;
  }

  return (
    <>
      <div className="finish w-75">
        <div className="wrapper-title">
          <div className="title-sub-app">
            <p className="title">Thank you</p>
            <div className="rectangle"></div>
            <p className="order-id">Order ID: {generateRandomString()}</p>
            <span className="order-will">
              Your order will be delivered today with {dataPayment.shipment}
            </span>
            <a href="/">Go to Homepage</a>
          </div>
        </div>
      </div>
      <div className="w-25 border-summary">
        <div className="summary-sub-app">
          <p>Summary</p>
          <span>10 items purchased</span>
          <div className="summary-divider"></div>
          <div className="container-delivery">
            <p className="delivery-estimation">Delivery estimation</p>
            <span className="title-delivery">
              today by {dataPayment.shipment}
            </span>
          </div>
          <div className="summary-divider-method"></div>
          <div className="container-delivery">
            <p className="delivery-estimation">Payment Method</p>
            <span className="title-delivery">{dataPayment.payment}</span>
          </div>
          <div className="cost-goods-shipment d-flex">
            <span>Cost of goods</span>
            <span className="price">500,000</span>
          </div>
          <div className="drop-fee-shipment d-flex">
            <span>Dropshipping Fee</span>
            <span className="price">5,900</span>
          </div>
          <div className="drop-fee-shipment d-flex">
            <span>
              <span className="bold-shipment">{dataPayment.shipment}</span>{" "}
              Shipment
            </span>
            <span className="price">{dataPayment.price}</span>
          </div>
          <div className="total-fee-finish d-flex">
            <p>Total</p>
            <p>505,900</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finish;
