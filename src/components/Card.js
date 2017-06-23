import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderButtomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0 , height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    maginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    elevation: 0.8,
    position: 'relative'

  }
};

export default Card;
