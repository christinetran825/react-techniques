import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import ButtonSetUp from "./buttonSetup";
import IconBtnSectionSetup from "./iconBtnSectionSetup";

class Likes extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      prefix: "fab",
      simple: "simple",
      rectangle: "rectangle",
      square: "square",
      roundSquare: "square round",
      circle: "square circle",
      circleBorder: "square circle-border",
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
  //Simple
    const simpleRectButtons =
      <ButtonSetUp
        brandGroup={brandsSimple}
        btnClassName={this.state.rectangle}
        prefix={this.state.prefix}
      />

    const simpleSquareButtons =
      <ButtonSetUp
        brandGroup={brandsSimple}
        btnClassName={this.state.square}
        prefix={this.state.prefix}
      />

    const simpleRoundSquareButtons =
      <ButtonSetUp
        brandGroup={brandsSimple}
        btnClassName={this.state.roundSquare}
        prefix={this.state.prefix}
      />

    const simpleCircleButtons =
      <ButtonSetUp
        brandGroup={brandsSimple}
        btnClassName={this.state.circle}
        prefix={this.state.prefix}
      />

    const simpleCircleBorderButtons =
      <ButtonSetUp
        brandGroup={brandsSimple}
        btnClassName={this.state.circleBorder}
        prefix={this.state.prefix}
      />

  //Square
    const squareRectButtons =
      <ButtonSetUp
        brandGroup={brandsSquare}
        btnClassName={this.state.rectangle}
        prefix={this.state.prefix}
      />

    const squareSquareButtons =
      <ButtonSetUp
        brandGroup={brandsSquare}
        btnClassName={this.state.square}
        prefix={this.state.prefix}
      />

    const squareRoundSquareButtons =
      <ButtonSetUp
        brandGroup={brandsSquare}
        btnClassName={this.state.roundSquare}
        prefix={this.state.prefix}
      />

    const squareCircleButtons =
      <ButtonSetUp
        brandGroup={brandsSquare}
        btnClassName={this.state.circle}
        prefix={this.state.prefix}
      />

  //Circle
    const circleRectButtons =
      <ButtonSetUp
        brandGroup={brandsCircle}
        btnClassName={this.state.rectangle}
        prefix={this.state.prefix}
      />

    const circleSquareButtons =
      <ButtonSetUp
        brandGroup={brandsCircle}
        btnClassName={this.state.square}
        prefix={this.state.prefix}
      />

    const circleRoundSquareButtons =
      <ButtonSetUp
        brandGroup={brandsCircle}
        btnClassName={this.state.roundSquare}
        prefix={this.state.prefix}
      />

    const circleCircleButtons =
      <ButtonSetUp
        brandGroup={brandsCircle}
        btnClassName={this.state.circle}
        prefix={this.state.prefix}
      />

    return(
      <section className="icons-only">
        <h2>Icons Only</h2>
        <section className="simpleBrands">
          <div>
            <h3>No Counter</h3>
            {brandsSimpleIcons}
            <br></br>
            {brandsSquareIcons}
            <br></br>
            {brandsCircleIcons}
            <br></br>
          </div>
        </section>

        <section className="icon-buttons">
          <h2>Icon Buttons</h2>
          <IconBtnSectionSetup
            sectionClassName="simpleBrands"
            label="Simple Brand Icons"
            shapeRect={simpleRectButtons}
            shapeSquared={simpleSquareButtons}
            shapeRoundSquared={simpleRoundSquareButtons}
            shapeCircle={simpleCircleButtons}
          />

          {simpleCircleBorderButtons}

          <IconBtnSectionSetup
            sectionClassName="squaredBrands"
            label="Round Square Background Icons"
            shapeRect={squareRectButtons}
            shapeSquared={squareSquareButtons}
            shapeRoundSquared={squareRoundSquareButtons}
            shapeCircle={squareCircleButtons}
          />

          <IconBtnSectionSetup
            sectionClassName="circledBrands"
            label="Circle Background Icons"
            shapeRect={circleRectButtons}
            shapeSquared={circleSquareButtons}
            shapeRoundSquared={circleRoundSquareButtons}
            shapeCircle={circleCircleButtons}
          />
        </section>

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
      </section>
    );
  }

}

export default Likes;
