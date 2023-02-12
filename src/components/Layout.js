import React from "react";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Finish from "./Finish";
import { useParams } from "react-router-dom";

export default function Layout() {
  const { ref } = useParams();

  let page = "";

  switch (ref) {
    case "payment":
      page = <Payment />;
      break;
    case "finish":
      page = <Finish />;
      break;

    default:
      page = <Delivery />;
      break;
  }

  return (
    <div className="App">
      <div className="sub-app">
        <div className="bangs">
          <div className="sub-bangs">
            <div className="wrapper-circle ">
              <div className="circle mr-140">
                <div className="circle-text">1</div>
                <div className="circle-title">Delivery</div>
                <i className="circle-arrow"></i>
              </div>
              <div
                className={
                  "circle mr-140 " + (ref === undefined ? "not-active" : "")
                }
              >
                <div className="circle-text">2</div>
                <div className="circle-title">Payment</div>
                <i className="circle-arrow"></i>
              </div>
              <div
                className={"circle " + (ref !== "finish" ? "not-active" : "")}
              >
                <div className="circle-text">3</div>
                <div className="circle-title">Finish</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-title-summary">{page}</div>
      </div>
    </div>
  );
}
