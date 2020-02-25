import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'

const HorizontalCard = ({ task }) => {
  const [color, setColor] = useState('')
  const [status, setStatus] = useState(task.status)

  const changeStatus = () => {
    console.log('on click')
    switch (status) {
      case 'T O D O':
        setStatus('D O I N G')
        setColor('#ffedb8')
        break
      case 'D O I N G':
        setStatus('D O N E')
        setColor('#7fffd4')
        break
      default:
        axios.delete(`http://192.168.1.4:3000/tasks/${task.id}`)
        break
    }
  }

  useEffect(() => {
    const isStatus = (status) => {
      if (status === 'T O D O') setColor('#ffb2e5')
      else if (status === 'D O I N G') setColor('#ffedb8')
      else setColor('#7fffd4')
    }
    isStatus(task.status)
  }, [status])

  return (
    <View style={[styles.outer, { backgroundColor: color }]}>
      <Text style={styles.innerText}>{task.title}</Text>
      <TouchableOpacity style={styles.copyButton} onPress={changeStatus}>
        <Text style={styles.copyHex}>{status}</Text>
      </TouchableOpacity>
    </View>
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
    color: '#133337',
    fontSize: 32,
    fontWeight: 'bold'
  },
  copyButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    width: 150
  },
  copyHex: {
    color: '#696969',
    fontSize: 20,
    alignSelf: 'center'
  }
})

export default HorizontalCard
