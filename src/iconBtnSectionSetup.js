import React from 'react';

const IconBtnSectionSetup = ({ sectionClassName, label, shapeRect, shapeSquared, shapeRoundSquared, shapeCircle }) => {
  return (
    <section className={sectionClassName}>
      <h3>{label}</h3>
        <div>
          <h4>Rectangle</h4>
          {shapeRect}
        </div>
        <div>
          <h4>Square</h4>
          {shapeSquared}
        </div>
        <div>
          <h4>Round Square</h4>
          {shapeRoundSquared}
        </div>
        <div>
          <h4>Circle</h4>
          {shapeCircle}
        </div>
    </section>
  )
}

export default IconBtnSectionSetup;
