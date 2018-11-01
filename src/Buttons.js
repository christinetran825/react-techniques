import React from 'react';
import Likes from './Likes.js'
import Icons from './Icons.js'
import IconsBrands from './IconsBrands.js'

class Buttons extends React.Component {

  render(){
    return(
      <section className="button-types">
        <Likes/>
        <Icons/>
        <IconsBrands/>
      </section>
    );
  }

}

export default Buttons;
