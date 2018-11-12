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
