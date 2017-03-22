import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class Styles extends Component {
  render() {
const stylesone = `const listStyles = StyleSheet.create({
  text: {
    marginLeft: 12,
    fontSize: 16,
    padding: 20
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});`;
const stylestwo = `
  render() {
    const { hasFetched, dataSource } = this.state;
    return (
      <View>
        {hasFetched ?
          <ListView

              dataSource={dataSource}
              renderRow={(rowData) => <Text style={listStyles.text}>{rowData.title}</Text>} // heyo!
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={listStyles.separator} />} // heyo!
            />
            : <Loader />
        }
      </View>
    );
  }
`;
    return(
      <div>
        <h1>7. Styles</h1>

<p>Now that we have some data, we can make our list look better with styles.</p>
<h2>Applying styles</h2>
<ul className="setup__steps">
<li>
<p>Add a new StyleSheet to App.js</p>
<Highlight lang="javascript" value={stylesone} />
</li>
<li>
<p>Style your ListView with the new `StyleSheet`</p>
<Highlight lang="javascript" value={stylestwo} />
</li>
<li>
<p>If you feel up to it, tinker with the styles and see what happens.</p>
</li>
</ul>
        <p>Thats it all done!!</p>

        <h2>Useful links</h2>
        <ul >
        <li>
        <a href="https://github.com/vhpoet/react-native-styling-cheat-sheet">Cheet Sheet</a>
        </li>
        <li>
        <a href="https://facebook.github.io/react-native/docs/style.html">Style Docs</a>
        </li>
        </ul>
      </div>
    );
  }
}

export default Styles;
