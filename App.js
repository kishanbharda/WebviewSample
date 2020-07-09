import React, {Component} from 'react';
import {View, Text} from 'react-native';
import WebView from 'react-native-webview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView source={{uri: 'https://www.shopify.com/'}} />
      </View>
    );
  }
}

export default App;
