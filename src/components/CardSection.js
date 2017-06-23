import React from 'React';
import { View }  from 'react-native';

const CardSection = (props) => {
  return(
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderButtomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'

  }
};

export default CardSection;
