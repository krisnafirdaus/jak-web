import React, { useState } from "react";
import { Link } from "react-router-dom";
import { thousandSeparator } from "../../helper";

import "./Delivery.scss";

const Delivery = () => {
  const [send, setSend] = useState(false);
  const [sum, setSum] = useState([500000]);
  const [data, setData] = useState({
    email: "",
    number: "",
    addres: "",
    dropname: "",
    dropnumber: "",
  });
  const [errTel, setErrTel] = useState(false);

  const click = () => {
    const index = sum.indexOf(5900);
    if (index > -1) {
      sum.splice(index, 1);
    } else {
      const newArray = [...sum, 5900];
      setSum(newArray);
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      return "";
    } else {
      const value =
        e.target.value.charAt(0) === "0"
          ? e.target.value.substring(1)
          : e.target.value;
      setData({ ...data, number: value });
    }

    if (value.length > 0 && value.length < 6) {
      setErrTel(true);
    } else {
      setErrTel(false);
    }
  };

  return (
    <>
      <div className="delivery w-75">
        <a href="/" className="back">
          <i class="arrow-back"></i>
          <div className="title-back">
            Back to cart <div></div>
          </div>
        </a>
        <div className="wrapper-title">
          <div className="title-sub-app">Delivery Details</div>
          <div className="rectangle"></div>
          <div className="wrapper-checkbox">
            <label class="container-label">
              Send as dropshipper
              <input
                type="checkbox"
                onClick={() => {
                  click();
                  setSend(!send);
                }}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="flex-input">
          <div className="left-input">
            <div>
              <input type="email" />
              <span class="floating-label">Email</span>
            </div>
            <div>
              <input
                type="text"
                class={"phone-number " + (errTel ? "errTel" : "")}
                value={data.number}
                onChange={(e) => handleChange(e)}
                maxLength="20"
              />
              <span class="floating-label phone-number">Phone Number</span>
            </div>
            <div>
              <textarea
                maxlength="120"
                onChange={(e) => setData({ ...data, addres: e.target.value })}
              ></textarea>
              <span class="floating-label delivery-address">
                Delivery Address {data.addres.length}
              </span>
            </div>
          </div>
          <div className="right-input">
            <div>
              <input
                type="text"
                class="dropshipper-name"
                disabled={send ? false : true}
              />
              <span class="floating-label dropshipper-name">
                Dropshipper name
              </span>
            </div>
            <div>
              <input
                type="text"
                class="dropshipper-number"
                disabled={send ? false : true}
              />
              <span class="floating-label dropshipper-number">
                Dropshipper phone number
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-25 border-summary">
        <div className="summary-sub-app">
          <p>Summary</p>
          <span>10 items purchased</span>
          <div className="cost-goods d-flex">
            <span>Cost of goods</span>
            <span className="price">500,000</span>
          </div>
          {send ? (
            <div className="drop-fee d-flex">
              <span>Dropshipping Fee</span>
              <span className="price">5,900</span>
            </div>
          ) : null}
          <div className="total-fee d-flex">
            <p>Total</p>
            <p>
              {thousandSeparator(
                sum.reduce((partialSum, a) => partialSum + a, 0)
              )}
            </p>
          </div>
          <Link to="payment">
            <button>Continue to Payment</button>
          </Link>
        </div>
      </div>{" "}
    </>
  );
};

export default Delivery;
