/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {StyleSheet, View, Platform, Text, TextInput} from 'react-native';

import {Slider, ThemeProvider} from 'react-native-ios-kit';

var Header = () => (
  <View style={styles.header}>
    <Text style={styles.header_text}>Color Picker</Text>
  </View>
);

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = props || {};
    this.state = {...props};
  }

  render() {
    return (
      <ThemeProvider>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{flex: 1, marginLeft: 15}}>{this.props.title}</Text>
          <Slider
            onValueChange={val => {
              this.props.onValueChange(val);
            }}
            step={1}
            maxValue={255}
            minValue={0}
            value={this.props.value}
            style={{flex: 8}}
          />
          <View style={{flex: 2, marginLeft: 15, marginRight: 15}}>
            <TextInput
              value={`${this.props.value}`}
              style={styles.text_input}
            />
          </View>
        </View>
      </ThemeProvider>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 100,
      green: 150,
      blue: 50,
    };
  }

  onSliderValueChange(val) {
    this.setState(val);
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: 350, height: 400}}>
            <View style={{flex: 1}}>
              <Control
                title="R"
                value={this.state.red}
                onValueChange={val => {
                  var currentColor = this.state;
                  var color = {...currentColor, red: val};
                  this.onSliderValueChange(color);
                }}
              />
              <Control
                title="G"
                value={this.state.green}
                onValueChange={val => {
                  var currentColor = this.state;
                  var color = {...currentColor, green: val};
                  this.onSliderValueChange(color);
                }}
              />
              <Control
                title="B"
                value={this.state.blue}
                onValueChange={val => {
                  var currentColor = this.state;
                  var color = {...currentColor, blue: val};
                  this.onSliderValueChange(color);
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${
                  this.state.blue
                })`,
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    height: 80,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 5,
    ...Platform.select({
      ios: {
        marginTop: 15,
      },
      android: {},
    }),
  },
  header_text: {
    fontSize: 18,
  },
  text_input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: 50,
    height: 30,
    textAlign: 'center',
    ...Platform.select({
      ios: {},
      android: {
        paddingBottom: 6,
      },
    }),
  },
});
