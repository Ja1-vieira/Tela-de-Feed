import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  cardContainer,
  Image,
} from 'react-native';

export default class PostCard extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorNameContainer}>
            <Text style={styles.authorNameText}>
              {this.props.post.autor}
            </Text>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>
              {this.props.post.legenda}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer:{
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  authorNameContainer: {
    flex: 0.85,
    justifyContent: 'center',
  },
  authorNameText: {
    fontSize: 20,
  },
  postImage: {
    marginTop: 10,
    resizeMode: 'contain',
    width: 175,
    alignSelf: 'center',
    height: 300,
  },
  captionText: {
    paddingTop: 10,
  }
})