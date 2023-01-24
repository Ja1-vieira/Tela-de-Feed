import React, { Component } from 'react';
import PostCard from './PostCard'
import { FlatList } from 'react-native-gesture-handler';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  cardContainer,
} from 'react-native';

let posts = require('./posts.json');

export default class Feed extends Component {
  renderItem = ({ item: post }) => {
      return <PostCard post={post}/>
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <Text style={styles.appTitleText}>Espectograma</Text>
        </View>

        <View style={styles.appTitle}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  droidSafeArea: {
    marginTop: Platform.Os === 'android' ? StatusBar.currentHeight : 35,
  },
  appTitle: {
    flex: 0.7,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: 28,
  },
  cardContainer: {
    flex: 0.93,
  },
});
