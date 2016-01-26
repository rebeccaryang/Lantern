

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var Main = require('./Src/main');
var MapView = require('react-native-maps');

/**
 * A sample app that demonstrates use of the FBSDK login button, native share dialog, and graph requests.
 */
var Lantern = React.createClass({
  render: function() {
    return (
        <MapView 
          style={styles.map}
          showsUserLocation={true} 
          followUserLocation={true}
        />
    );
  }
});

var styles = StyleSheet.create({
  map: {
     flex:1
   }
})

AppRegistry.registerComponent('Lantern', () => Lantern);
