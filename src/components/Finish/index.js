import React, { useState, useEffect } from "react";
import { thousandSeparator } from "../../helper";
import "./Finish.scss";

const Finish = () => {
  const [count, setCount] = useState([]);
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

  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem("finishcount")));
  }, []);

  return (
    <>
      <div className="finish w-75">
        <div className="wrapper-title">
          <div className="title-sub-app">
            <p className="title">Thank you</p>
            <div className="rectangle"></div>
            <p className="order-id">Order ID: {generateRandomString()}</p>
            <span className="order-will">
              Your order will be delivered today with {dataPayment?.shipment}
            </span>
            <a href="/" className="back">
              <i className="arrow-back"></i>
              <div className="title-back">Go to Homepage</div>
            </a>
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
              today by {dataPayment?.shipment}
            </span>
          </div>
          <div className="summary-divider-method"></div>
          <div className="container-delivery">
            <p className="delivery-estimation">Payment Method</p>
            <span className="title-delivery">{dataPayment?.payment}</span>
          </div>
          <div className="cost-goods-shipment d-flex">
            <span>Cost of goods</span>
            <span className="price">{thousandSeparator(count[0])}</span>
          </div>
          {count.length > 2 && (
            <div className="drop-fee-shipment d-flex">
              <span>Dropshipping Fee</span>
              <span className="price">{thousandSeparator(count[1])}</span>
            </div>
          )}
          <div className="drop-fee-shipment d-flex">
            <span>
              <span className="bold-shipment">{dataPayment?.shipment}</span>{" "}
              Shipment
            </span>
            <span className="price">{dataPayment?.price}</span>
          </div>
          <div className="total-fee-finish d-flex">
            <p>Total</p>
            <p>
              {thousandSeparator(
                count.reduce((partialSum, a) => partialSum + a, 0)
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finish;
