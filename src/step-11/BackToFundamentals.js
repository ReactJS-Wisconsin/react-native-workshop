import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class BackToFundamentals extends Component {
  render() {
    return(
      <div>
        <h1>11. Back to fundamentals</h1>
        <p>Before we advance, let{`'`}s spend some time understanding how react works.</p>
        <p>So far, we have used React as a static rendering engine (outputing hardcoded data). Now, we are going to add state to make React components more dynamic.</p>

<p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component. Let{`'`}s see it in practice.
</p>
        <h2>Cow clicker</h2>
        <p>Click the cow and see the Clicks increment</p>
        <p><iframe src="http://jsbin.com/safotaxuri/1/embed?js,output" style={{width: '100%', height: '600px'}}></iframe></p>

        <h2>API</h2>
        <h3>GETINITIALSTATE</h3>
        <p>Implement the function getInitialState, which returns... the initial state of the component. This is an object map of keys to values.  </p>

<Highlight lang='javascript' value={`
  getInitialState: function() {
    return {
      clicks: 0
    };
  }
  `} />

        <h3>THIS.STATE</h3>
          <p>To access a component's state, use this.state, just like how we use this.props.  </p>
        <h3>THIS.SETSTATE</h3>
        <p>  To update a component's state, call this.setState with an object map of keys to updated values. Keys that are not provided are not affected.  </p>


        <Highlight lang='javascript' value={`
          this.setState({
            // Notice how we access the current state here
            clicks: this.state.clicks + 1
          })
          `} />



        <Note type="facts"><p><span>Note:  </span> You may be surprised that we don't need to pass the callback as this.onCowClick.bind(this). (If not, read <a href='http://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work/3127440#3127440'>this</a>). This is because React autobinds methods on the component instance for performance reasons. <a href='https://facebook.github.io/react/docs/state-and-lifecycle.html'>Read more here.</a>
</p></Note>



<h2>Exercise: State</h2>
<p>Edit this board picker so the button actually works. Right now, the first board is always selected (var isSelected = ii === 0).</p>

        <p><iframe src="http://jsbin.com/woweqalucu/1/embed?js,output" style={{width: '100%', height: '600px'}}></iframe></p>
<a href="http://jsbin.com/namukikixu/1/embed?js,output">View Solution >>></a>
      </div>
    );
  }
}

export default BackToFundamentals;
