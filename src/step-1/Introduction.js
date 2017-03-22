import React, {Component} from 'react';
import Note from '../Note';

class Introduction extends Component {
  render() {
    return(
      <div className="general">
        <h1>1. Introduction</h1>
        <p>In this workshop, you will be learning about React Native, how it works, and how to build your first React Native App.</p>
        <h2>What is React Native?</h2>
        <h2>Why Create React Native App?</h2>

          <p>Create React Native App should reduce the setup time it takes to try building a mobile app to the absolute minimum, ideally on par with React web development (especially as seen with Create React App).</p>

          <p><a href="https://github.com/react-community/create-react-native-app#faqs">See Create React Native App FAQS</a></p>
<p>Let{`'`}s get started!</p>

      </div>
    );
  }
}

export default Introduction;
