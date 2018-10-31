import React from 'react';
import Likes from './Likes.js'
import Icons from './Icons.js'

class Buttons extends React.Component {

  render(){
    return(
      <section className="button-types">
        <Likes/>
        <Icons/>
      </section>
    );
  }

}

export default Buttons;
