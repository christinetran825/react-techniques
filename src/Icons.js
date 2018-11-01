import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonSetUp from "./buttonSetup";
import IconBtnSectionSetup from "./iconBtnSectionSetup";

class Likes extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <section className="icons-objects">
        <h3>Icons</h3>
        <div className="icons-sizes">
          <FontAwesomeIcon icon="coffee" size="1x"/>
          <FontAwesomeIcon icon="coffee" size="2x"/>
          <FontAwesomeIcon icon="coffee" size="3x"/>
          <FontAwesomeIcon icon="coffee" size="4x"/>
          <FontAwesomeIcon icon="coffee" size="5x"/>
          <FontAwesomeIcon icon="coffee" size="6x"/>
        </div>

        <div>
          <h3>Choose A Drink</h3>
          <FontAwesomeIcon icon={['fas', 'check-square']} /> Beer: <FontAwesomeIcon icon="beer" />
          <br></br>
          <FontAwesomeIcon icon={['far', 'check-square']} /> Beer: <FontAwesomeIcon icon="beer" />
          <br></br>
          <FontAwesomeIcon icon={['far', 'square']}/> Coffee: <FontAwesomeIcon icon="coffee" />
          <br></br>
          <FontAwesomeIcon icon={['far', 'square']}/> Wine: <FontAwesomeIcon icon="wine-glass-alt" />

          <h3>Choose A Snack</h3>
          <FontAwesomeIcon icon="check-square" /> Stroopwafel: <FontAwesomeIcon icon="stroopwafel" />
          <br></br>
          <FontAwesomeIcon icon={['far', 'square']} /> Apple: <FontAwesomeIcon icon="apple-alt" />
          <br></br>
          <FontAwesomeIcon icon={['far', 'square']} /> Cookie: <FontAwesomeIcon icon="cookie" />
        </div>
      </section>
    );
  }

}

export default Likes;
