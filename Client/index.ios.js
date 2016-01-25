

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  MapView
} = React;

var Login = require('./Login');
var Map = require('./map.js');

/**
 * A sample app that demonstrates use of the FBSDK login button, native share dialog, and graph requests.
 */
var Lantern = React.createClass({
  render: function(){
    return (
      return <MapView style={styles.map}></MapView>
    )
  }
  // render: function() {
  //   return (
  //     <Image
  //       source={require('./plutoBack.png')}
  //       style={styles.loginImage}>
  //       <View style={styles.disclaimerContainer}>
  //         <Text style={styles.disclaimerText}>Hey is this working</Text>
  //       </View>
  //       <Login style={styles.loginContainer}/>
  //     </Image>
  //   );
  // }
});

// importing styles
var styles = StyleSheet.create(require('./styles.js'));

AppRegistry.registerComponent('Lantern', () => Lantern);
