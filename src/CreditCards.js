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
        <form>
          <label>Email</label>
          <input type="text" name="email" />
          <br></br>
          <label>Full Name</label>
          <input type="text" name="name" />
          <br></br>
          <label>Country</label>
          <input type="text" name="country" />
          <br></br>
          <label>Address</label>
          <input type="text" name="address" />
          <br></br>
          <label>Apt / Floor / Suite / Other <span> (optional)</span></label>
          <input type="text" name="address-opt" />
          <br></br>
          <label>City</label>
          <input type="text" name="city" />
          <br></br>
          <label>State / Province / Region</label>
          <input type="text" name="state" />
          <br></br>
          <label>Zip / Postal Code</label>
          <input type="text" name="zip" />
          <br></br>
          <label>Phone <span>(in case of delivery issues)</span></label>
          <input type="number" name="phone" />
          <br></br>
          <label>Special Delivery Instructions <span>(optional)</span></label>
          <input type="text" name="delivery-message" />
          <br></br>
          <p>Save Shipping Address</p>
        </form>
        <h5>Billing</h5>
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
