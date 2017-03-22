import React, {Component} from 'react';
import Note from '../Note';

class Introduction extends Component {
  render() {
    return(
      <div className="general">
        <h1>1. Introduction</h1>
        <p>In this workshop, you will be learning about React Native, how it works, and how to build your first React Native App.  We will be using the newly released Create React Native App.</p>

        <h2>Who is this workshop for?</h2>
<p>In short, Everyone!  Beginner or Guru.  In workshop 1 we keep things basic to get everyone up to speed.  If you are an advanced React Native or React developer, this is your time to help out your fellow workshop buddies!</p>

<p>At the end of this workshop, we will discuss where we want to take workshop 2 and vote on an App to do deeper dive on and build (Realtime Chat, Twitter Clone, etc.)</p>
        <h2>Why Create React Native App?</h2>

          <p>Create React Native App should reduce the setup time it takes to try building a mobile app to the absolute minimum, ideally on par with React web development (especially as seen with Create React App).
Creact React Native App runs Expo under the hood.
          </p>

          <p><a href="https://github.com/react-community/create-react-native-app#faqs">See Create React Native App FAQS</a></p>

          <h2>Let{`'`}s get started!</h2>
  <Note type="tips"><p><span>Tip: </span> .</p></Note>
          <h2>Helpful Links</h2>
          <ul>
            <li><a href="https://facebook.github.io/react-native/releases/next/docs/getting-started.html">React Native Component Docs</a></li>
            <li><a href="https://facebook.github.io/react/docs/hello-world.html">React Docs</a></li>
            <li><a href="https://docs.expo.io/versions/v15.0.0/index.html">Expo Docs</a></li>

          </ul>
      </div>
    );
  }
}

export default Introduction;
