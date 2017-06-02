import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>;
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image}/>;
const App = () => (
  <Card>
    <Title>Some sort of property</Title>
    <Photo uri="https://lid.zoocdn.com/645/430/14b6a430b76a235e8de2ba02d695e7a0bd789b40.jpg"/>
  </Card>
);

// Styles
const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  image: {
    height: 400,
    marginVertical: 10,
    width: 400
  }
});

export default App;
