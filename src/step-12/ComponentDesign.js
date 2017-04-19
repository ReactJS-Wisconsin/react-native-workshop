import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class ComponentDesign extends Component {
  render() {
    return(
      <div>
        <h1>12. Component Design</h1>
        <p>Components are the heart and soul of React.  In order to build our app, we must first have an idea of what components we want to create.</p>
        <p>The following exercise is hands on.</p>
        <ul className="setup__steps">

          <li>On provided paper (individually), figure out how you would break the page into components.  Outline each section that could be a component, and create a list of  your components for each screen.
          </li>
<li>
          Outline each section that could be a component, and create a list of  your components for each screen.
          </li>

          <li>Consider: What would you name these components? what components would have interactions? how would you organize your components?</li>

          <li>Discuss your choices with others around you!</li>
        </ul>

        <Note type="facts"><p><span>Note:  </span> There is not always a right or wrong answer!
</p></Note>


        <a href='/component-design-worksheet.pdf' target='_blank'>Component worksheet >>></a>
      </div>
    );
  }
}

export default ComponentDesign;
