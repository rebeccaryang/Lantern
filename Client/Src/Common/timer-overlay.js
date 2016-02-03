'use strict';

import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

// importing styles
const styles = StyleSheet.create(require('../styles.js'));
const timerMixin = require('react-timer-mixin');
const Timer = require('../components/Timer')
var moment = require('moment');
var endTime = moment().add(11,'seconds')

var TimerOverlay = React.createClass({
  getInitialState: function(){
   return {
      timeRemaining: 0
    } 
  },
  componentDidMount: function() {
    this.setState({
      timeRemaining: (endTime - Date.now())-(endTime - Date.now())%1000
    });
    timerMixin.setInterval.call(this, function(){
      this.setState({timeRemaining: this.state.timeRemaining -= 1000});
      console.log(this.state.timeRemaining)
    },1000);
  },
  renderOverlay:function(){
    if(this.state.timeRemaining < 0){
      return componentStyles.overTime
    } else {
      return componentStyles.background
    }
  },
  render: function() {
    return (
      <View style={this.renderOverlay()}>
        <View style={componentStyles.alertContainer}>
        <Timer timeRemaining={this.state.timeRemaining} />
        </View>
      </View>
    );
  }

});

module.exports = TimerOverlay;

import { Dimensions } from 'react-native';
  var width = Dimensions.get('window').width; //full width
  var height = Dimensions.get('window').height; //full height

var componentStyles = StyleSheet.create({
  text: {
    textAlign: 'right',
    padding: 5,
  },
  alertContainer: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 5,
    height: height/10,
    width: width*.8,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    marginTop: 6,
    marginRight: 4
  },
  background: {
    backgroundColor:'transparent',
    flex:1,
    height:height,
    width:width,
    alignItems:'flex-end',
    justifyContent:'flex-start'
  },
  overTime: {
    backgroundColor:'rgba (255, 0, 0, .5)',
    flex: 1,
    height:height,
    width:width,
    alignItems:'flex-end',
    justifyContent:'flex-start'
  }
});