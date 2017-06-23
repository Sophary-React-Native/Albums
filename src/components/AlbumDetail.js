import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ( { album }) => {
  const{ title, artist, thumbnail_image, image, url }= album;
  const{ thumbnailStyle, headerContainStyle, imageStyle }=styles;
  return(
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image}}
          />
        </View>
        <View style={headerContainStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source= {{ uri: image}}
        />
      </CardSection>
      <CardSection>
        <Button onPress={ () => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};
const styles = {
  headerContainStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  imageStyle: {
    height: 300,
    width: 0,
    flex: 1
  }
}

export default AlbumDetail;
