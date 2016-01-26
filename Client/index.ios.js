

var React = require('react-native');
var {
  AppRegistry,
  MapView,
  StyleSheet,
  View,
} = React;


/**
 * A sample app that demonstrates use of the FBSDK login button, native share dialog, and graph requests.
 */

 // MapView delegates to the operating system

var Lantern = React.createClass({
  getInitialState: function(){
    return {
      pin:{
        latitude: 0,
        longitude: 0
      }
    }
  },
  render: function(){
    return (

      <MapView style={styles.map} showsUserLocation={true} followsUserLocation={true} annotations={[this.state.pin]} onAnnotationPress={this.onAnnotationPress} onRegionChangeComplete={this.onRegionChangeComplete}>
      </MapView>
    )     
  },
  onRegionChangeComplete: function(region){
    // SETTING STATE ---------------------------------------------------------------------------
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });
  },
  onAnnotationPress: function(region){
    // GETTING AND SETTING STATE ---------------------------------------------------------------
    console.log("Annotation pressed!")
    console.log(this.state);
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude,
        title: 'STARTING POINT',
        leftCalloutView: true,
        // hasRightCallout: true,
        animateDrop: true
      }
    }); 
  }
});

var styles = StyleSheet.create({
  map:{
    flex: 1
  }
});

AppRegistry.registerComponent('Lantern', () => Lantern);
