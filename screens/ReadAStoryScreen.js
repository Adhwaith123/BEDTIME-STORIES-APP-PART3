import React from 'react';
import { Text, View } from 'react-native';

export default class ReadAStoryScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search:''
    }
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>WriteAStory</Text>
        </View>
      );
    }
  }