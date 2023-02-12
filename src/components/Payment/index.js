import React, { useState, useEffect } from "react";
import { thousandSeparator } from "../../helper";
import "./Payment.scss";

const Payment = () => {
  // const [data, setData] = useState({});
  const [save, setSave] = useState([]);

  const [sum, setSum] = useState([]);
  const [data, setData] = useState({
    shipment: save.shipment || "GO-SEND",
    price: save.price || "15,000",
    payment: save.payment || "e-Wallet",
  });
  const [pay, setPay] = useState([]);

  useEffect(() => {
    setSave(JSON.parse(localStorage.getItem("payment")));
  }, []);

  useEffect(() => {
    if (save) {
      setData({
        shipment: save.shipment,
        price: save.price,
        payment: save.payment,
      });
      setPay([parseInt(save?.price?.split(",").join(""))]);
    }
  }, [save]);

  useEffect(() => {
    setSum([...JSON.parse(localStorage.getItem("delivery"))]);
  }, []);

  const count = [...sum, ...pay];

  useEffect(() => {
    localStorage.setItem("finishcount", JSON.stringify(count));
  }, [count]);

  const ShipmentData = [
    {
      id: 1,
      name: "GO-SEND",
      value: "GO-SEND",
      price: "15,000",
    },
    {
      id: 2,
      name: "JNE",
      value: "JNE",
      price: "9,000",
    },
    {
      id: 3,
      name: "Personal Courier",
      value: "Personal Courier",
      price: "29,000",
    },
  ];

  const PaymentData = [
    {
      id: 1,
      name: "e-Wallet",
      value: "e-Wallet",
      price: "1,500,000 Left",
    },
    {
      id: 2,
      name: "Bank Transfer",
      value: "Bank Transfer",
      price: "",
    },
    {
      id: 3,
      name: "Virtual Account",
      value: "Virtual Account",
      price: "",
    },
  ];

  return (
    <>
      <div className="payment w-75">
        <a href="/" className="back">
          <i className="arrow-back"></i>
          <div className="title-back">Back to delivery</div>
        </a>
        <div className="wrapper-title">
          <div className="title-sub-app">Shipment</div>
          <div className="rectangle"></div>
        </div>
        <div className="wrapper-shipment">
          {ShipmentData.map((x) => {
            return (
              <div
                key={x.id}
                className={
                  "border-shipment " +
                  (x.value == data.shipment ? "active " : "") +
                  (x.id > 1 && "ml-10")
                }
                onClick={() => {
                  const index = pay.indexOf(
                    parseInt(data.price?.split(",").join(""))
                  );

                  setData({
                    ...data,
                    shipment: x.value,
                    price: x.price,
                  });

                  if (index > -1) {
                    pay.splice(index, 1);
                    setPay([parseInt(x.price?.split(",").join(""))]);
                  } else {
                    setPay([parseInt(x.price?.split(",").join(""))]);
                  }

                  localStorage.setItem(
                    "payment",
                    JSON.stringify({
                      ...data,
                      shipment: x.value,
                      price: x.price,
                    })
                  );
                }}
              >
                <div className="border-shipment-sub">
                  <p>{x.name}</p>
                  <span>{x.price}</span>
                </div>
                {x.value == data.shipment ? (
                  <div>
                    <span className="checkmark">
                      <div className="checkmark_stem"></div>
                      <div className="checkmark_kick"></div>
                    </span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="wrapper-title">
          <div className="title-sub-app">Payment</div>
          <div className="rectangle sub-payment"></div>
        </div>
        <div className="wrapper-shipment">
          {PaymentData.map((x) => {
            return (
              <div
                key={x.id}
                className={
                  "border-shipment " +
                  (x.value == data.payment ? "active " : "") +
                  (x.id > 1 ? "ml-10 " : "")
                }
                onClick={() => {
                  setData({
                    ...data,
                    payment: x.value,
                  });
                  localStorage.setItem(
                    "payment",
                    JSON.stringify({ ...data, payment: x.value })
                  );
                }}
              >
                <div
                  className={
                    "border-shipment-sub " + (x.price === "" && "flex")
                  }
                >
                  <p className={x.price === "" && "fs-16"}>{x.name}</p>
                  {x.price !== "" && <span>{x.price}</span>}
                </div>
                {x.value == data.payment ? (
                  <div>
                    <span className="checkmark">
                      <div className="checkmark_stem"></div>
                      <div className="checkmark_kick"></div>
                    </span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-25 border-summary">
        <div className="summary-sub-app">
          <p>Summary</p>
          <span>10 items purchased</span>
          <div className="summary-divider"></div>
          <div className="container-delivery">
            <p className="delivery-estimation">Delivery estimation</p>
            <span className="title-delivery">today by {data.shipment}</span>
          </div>
          <div className="cost-goods-shipment d-flex">
            <span>Cost of goods</span>
            <span className="price">{thousandSeparator(sum[0])}</span>
          </div>
          {sum[1] !== undefined && (
            <div className="drop-fee-shipment d-flex">
              <span>Dropshipping Fee</span>
              <span className="price">{thousandSeparator(sum[1])}</span>
            </div>
          )}
          <div className="drop-fee-shipment d-flex">
            <span>
              <span className="bold-shipment">{data.shipment}</span> Shipment
            </span>
            <span className="price">{data.price}</span>
          </div>
          <div className="total-fee d-flex">
            <p>Total</p>
            <p>
              {thousandSeparator(
                count.reduce((partialSum, a) => partialSum + a, 0)
              )}
            </p>
          </div>
          <a href="/finish">
            <button>Pay with {data.payment}</button>
          </a>
        </div>
      </div>{" "}
    </>
  );
};

export default Payment;
