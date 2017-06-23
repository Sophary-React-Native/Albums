//import libraries to help to create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
// Create a Components
const App = () => (
  <View>
    <Header headerText={'Smart 9 dictionary'} />
    <AlbumList style={{flex: 1}}/>
  </View>
);

// render it a device
AppRegistry.registerComponent('Albums', () => App)
