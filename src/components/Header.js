//Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> { props.headerText } </Text>
    </View>
  );

};
const styles = {
  viewStyle: {
    backgroundColor: '#33ccff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    padding: 25,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
};

// Make a Component available for other parts of the app
export default Header;
