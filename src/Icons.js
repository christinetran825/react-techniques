import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
// import { faCheckSquare as fasCheckSquare} from '@fortawesome/free-solid-svg-icons'
// import { faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons'

class Likes extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      simple: "simple",
      rectangle: "rectangle",
      square: "square",
      roundSquare: "square round",
      circle: "square circle",
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

//Icons
    const brandsSimpleIcons = brandsSimple.map(brand =>
      <FontAwesomeIcon icon={['fab', `${brand}`]} size="4x" className="icons"/>
    )

    const brandsSquareIcons = brandsSquare.map(brand =>
      <FontAwesomeIcon icon={['fab', `${brand}`]} size="5x" className="icons"/>
    )

    const brandsCircleIcons = brandsCircle.map(brand =>
      <FontAwesomeIcon icon={['fab', `${brand}`]} size="5x" className="icons"/>
    )

//Buttons
    const brandsRectButtons = brandsSimple.map(brand =>
      <button className={this.state.rectangle}><Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${brand}`]} /></Link></button>
    )

    const brandsSquareButtons = brandsSquare.map(brand =>
      <button className={this.state.square}><Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${brand}`]} /></Link></button>
    )

    const brandsRoundSquareButtons = brandsSquare.map(brand =>
      <button className={this.state.roundSquare}><Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${brand}`]} /></Link></button>
    )

    const brandsCircleButtons = brandsCircle.map(brand =>
      <button className={this.state.circle}><Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', `${brand}`]} /></Link></button>
    )

    return(
      <div className="icons-brands">
        <div className="icon-only no-counter">
          <h2>Icons Only</h2>
          {brandsSimpleIcons}
          <br></br>
          {brandsSquareIcons}
          <br></br>
          {brandsCircleIcons}
          <br></br>
        </div>
        {/* <div className="icon-only counter">
          <h2>Icons Only with Counter</h2>
          {brandsSimpleIcons}
          <br></br>
          {brandsSquareIcons}
          <br></br>
          {brandsCircleIcons}
          <br></br>
        </div> */}
        <div className="icon-buttons no-counter">
          <h2>Icon Buttons</h2>
          <h3>Rectangle</h3>
          {brandsRectButtons}
          <h3>Square</h3>
          {brandsSquareButtons}
          <h3>Round Square</h3>
          {brandsRoundSquareButtons}
          <h3>Circle</h3>
          {brandsCircleButtons}
        </div>
        {/* <div className="icon-buttons counter">
          <h2>Icon Buttons with Counter</h2>
          <h3>Rectangle</h3>
          {brandsRectButtons}
          <h3>Square</h3>
          {brandsSquareButtons}
          <h3>Round Square</h3>
          {brandsRoundSquareButtons}
          <h3>Circle</h3>
          {brandsCircleButtons}
        </div> */}

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
