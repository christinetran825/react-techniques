import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
// import { faCheckSquare as fasCheckSquare} from '@fortawesome/free-solid-svg-icons'
// import { faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons'

class Likes extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  brands = (listbrands) => {
    listbrands.map(brand =>
    <FontAwesomeIcon icon={['fab', `${brand}`]} />)
  }

  render(){
    //icons have name, shape, size, color, link,
    const brandsSimple = ["twitter", "facebook-f", "google", "pinterest-p", "linkedin-in", "medium-m", "github-alt", "instagram"]

    const brandsSquare = ["twitter-square", "facebook-square", "pinterest-square", "linkedin", "medium", "github-square"]

    const brandsCircle = ["pinterest", "github"]

    const brandsSimpleIcons = brandsSimple.map(brand =>
      <FontAwesomeIcon className="icons" icon={['fab', `${brand}`]} size="4x"/>
    )

    const brandsSquareIcons = brandsSquare.map(brand =>
      <FontAwesomeIcon className="icons" icon={['fab', `${brand}`]} size="5x"/>
    )

    const brandsCircleIcons = brandsCircle.map(brand =>
      <FontAwesomeIcon className="icons" icon={['fab', `${brand}`]} size="5x" />
    )

    const brandsSimpleButtons = brandsSimple.map(brand =>
      <button className="social-media"><Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${brand}`]} /></Link></button>
    )

    const brandsSquareButtons = brandsSquare.map(brand =>
      <button className="social-media shape"><Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${brand}`]} className="roundsquare" /></Link></button>
    )

    const brandsCircleButtons = brandsCircle.map(brand =>
      <button className="social-media circle"><Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${brand}`]} /></Link></button>
    )

    return(
      <div className="icons-brands">
        <div className="buttons-social-media">
          <h3>social sharing?</h3>
          <h3>Icons Only</h3>
          {brandsSimpleIcons}
          <br></br>
          {brandsSquareIcons}
          <br></br>
          {brandsCircleIcons}
          <br></br>
          <h3>Rectangle</h3>
          <h3>Square</h3>
          {brandsSimpleButtons}
          {brandsSquareButtons}
          {brandsCircleButtons}
          <h3>Round Square</h3>
          <h3>Circle</h3>
        </div>

        <div className="icons-objects">
          <h3>Icons</h3>
          <div className="icons-sizes">
            <FontAwesomeIcon icon="coffee" size="1x"/>
            <FontAwesomeIcon icon="coffee" size="2x"/>
            <FontAwesomeIcon icon="coffee" size="3x"/>
            <FontAwesomeIcon icon="coffee" size="4x"/>
            <FontAwesomeIcon icon="coffee" size="5x"/>
            <FontAwesomeIcon icon="coffee" size="6x"/>
          </div>

          <div className="icons-social-media">
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <FontAwesomeIcon icon={['fab', 'microsoft']} />
            <FontAwesomeIcon icon={['fab', 'google']} />
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
        </div>
      </div>
    );
  }

}

export default Likes;
