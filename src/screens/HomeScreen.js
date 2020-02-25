import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image } from 'react-native'

import HorizontalCard from '../components/HorizontalCard'
import QuotesScreen from '../screens/QuotesScreen'

import Icon from 'react-native-vector-icons/FontAwesome'
import AddIcon from 'react-native-vector-icons/Entypo'

import axios from 'axios'

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTaskData = () => {
      const url = 'http://192.168.1.4:3000/tasks'
      axios.get(url)
        .then((res) => res.data)
        .then((data) => setTasks(data))
        .catch(err => console.error(err))
    }
    fetchTaskData()
  })
  const tapHandle = () => {
    navigation.navigate('Add')
  }
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {/* Intro  */}
      <View style={[{ backgroundColor: '#00acee' }, styles.outer]}>
        <Text style={styles.innerText}>T 0 D O A P P</Text>
        <Text style={{ fontSize: 12, color: '#eee' }}>Made with <Icon name='heart' /> by Decoding</Text>
        <Image
          style={{ width: 70, height: 60, position: 'absolute', top: Dimensions.get('window').width / 1.5, flex: 1 }}
          source={require('../../assets/mascot.png')}
        />
        <Text style={{ fontSize: 15, color: '#fff', paddingTop: Dimensions.get('window').width / 1.5 }}>
          T o u c h  t h e  i c o n  t o  a d d  n e w  t a s k
        </Text>
        <AddIcon name='add-to-list' style={{ paddingTop: Dimensions.get('window').width / 18 }} size={30} onPress={tapHandle} />
      </View>
      {/* Show Tasks */}
      <FlatList
        data={tasks}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(task, index) => index.toString()}
        renderItem={({ item }) => {
          return <HorizontalCard task={item} />
        }}
      />
      {/* The end  */}
      <QuotesScreen />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  innerText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  }
})

export default HomeScreen
