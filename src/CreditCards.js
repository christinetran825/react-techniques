import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

class Likes extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div className="credit-cards">
        <h2>Credit Cards</h2>
        <h5>Your Cart</h5>
        <h5>Shipping</h5>
        <form id="shipping">
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" name="country" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" />
          </div>
          <div className="form-group">
            <label>Apt / Floor / Suite / Other <span> (optional)</span></label>
            <input type="text" name="address-opt" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" />
          </div>
          <div className="form-group">
            <label>State / Province / Region</label>
            <input type="text" name="state" />
          </div>
          <div className="form-group">
            <label>Zip / Postal Code</label>
            <input type="text" name="zip" />
          </div>
          <div className="form-group">
            <label>Phone <span>(in case of delivery issues)</span></label>
            <input type="number" name="phone" />
          </div>
          <div className="form-group">
            <label>Special Delivery Instructions <span>(optional)</span></label>
            <textarea className="form-control" id="special-message"></textarea>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input"/>
            <label className="form-check-label">Save Shipping Address</label>
          </div>
        </form>
        <h5>Billing</h5>
        <form>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input"/>
            <label className="form-check-label">My Billing Address is the same as my Shipping Address: (put shipping address here)</label>
          </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" name="country" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" />
          </div>
          <div className="form-group">
            <label>Apt / Floor / Suite / Other <span> (optional)</span></label>
            <input type="text" name="address-opt" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" />
          </div>
          <div className="form-group">
            <label>State / Province / Region</label>
            <input type="text" name="state" />
          </div>
          <div className="form-group">
            <label>Zip / Postal Code</label>
            <input type="text" name="zip" />
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input"/>
            <label className="form-check-label">Save Billing Address</label>
          </div>
        </form>
        <h5>Payment Methods</h5>
        <div className="pay-methods">
          <FontAwesomeIcon icon={['far', 'credit-card']} />
          <FontAwesomeIcon icon={['fab', 'cc-paypal']} />
          <FontAwesomeIcon icon={['fab', 'amazon-pay']} />
        </div>
        <form>
          <label>Name on card:</label>
          <input type="text" name="name" />
          <br></br>
          <label>Card number:</label>
          <input type="text" name="card-number" />
          <br></br>
          <label>Expiration Date:</label>
          <input type="text" name="expiration" />
          <br></br>
          <label>Security Code:</label>
          <input type="text" name="security-code" />
          <br></br>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }

}

export default Likes;
