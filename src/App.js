import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="sub-app">
        <div className="bangs">
          <div className="sub-bangs">
            <div className="wrapper-circle">
              <div className="circle">
                <div className="circle-text">1</div>
                <div className="circle-title">Delivery</div>
                <i class="circle-arrow"></i>
                <div className="circle-text">2</div>
                <div className="circle-title">Payment</div>
                <i class="circle-arrow"></i>
                <div className="circle-text">3</div>
                <div className="circle-title">Finish</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-title-summary">
          <div className="w-75">
            <div className="title-back">{`< Back to detail`}</div>
            <div className="wrapper-title">
              <div className="title-sub-app">Delivery Details</div>
              <div className="wrapper-checkbox">
                <label class="container-label">
                  Send as dropshipper
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="flex-input">
              <div className="left-input">
                <input type="text" />
                <input type="text" />
                <textarea></textarea>
              </div>
              <div className="right-input">
                <input type="text" />
                <input type="text" />
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
              <div className="drop-fee d-flex">
                <span>Dropshipping Fee</span>
                <span className="price">5,900</span>
              </div>
              <div className="total-fee d-flex">
                <p>Total</p>
                <p>505,900</p>
              </div>
              <button>Continue to Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
