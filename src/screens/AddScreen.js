import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, Picker } from 'react-native'
import { Body, Icon, ListItem, Input, Fab } from 'native-base'

import axios from 'axios'
import AwesomeAlert from 'react-native-awesome-alerts'

const url = 'http://192.168.1.4:3000/tasks'

const AddScreen = ({ navigation }) => {
  const [isDoing, setIsDoing] = useState(false)
  const [title, setTitle] = useState('')
  const [added, setAdded] = useState(false)
  const onChangeHandle = (txt) => {
    setTitle(txt)
  }

  const handleSubmit = async () => {
    const newTask = {
      title
    }
    newTask.status = (isDoing) ? 'D O I N G' : 'T O D O'
    await axios.post(url, newTask)
      .then(res => {
      })
      .catch((err) => console.error(err))
    setAdded(true)
  }

  const hideAlert = () => {
    setAdded(false)
  }
  return (
    <View style={styles.outer}>
      <ListItem>
        <Body>
          <Input
            placeholder='What needs to be done?'
            onChangeText={onChangeHandle}
            style={{ flex: 1 }}
          />
        </Body>
        <Picker
          selectedValue={isDoing}
          style={{ height: 50, width: 100, flex: 1, paddingTop: 40, paddingRight: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setIsDoing(itemValue)}
        >
          <Picker.Item label='T o  d o' value='false' />
          <Picker.Item label='D o i n g' value='true' />
        </Picker>
        <Fab
          style={{ backgroundColor: '#05878a', flex: 1, top: Dimensions.get('window').height / 2, right: Dimensions.get('window').width / 2.8 }}
          onPress={handleSubmit}
        >
          <Icon name='add' />
        </Fab>
      </ListItem>
      <AwesomeAlert
        show={added}
        showProgress={false}
        title='Success'
        message='Follow tasks until complete'
        closeOnTouchOutside
        closeOnHardwareBackPress={false}
        showConfirmButton
        confirmText='Okay'
        confirmButtonColor='#80c342'
        onConfirmPressed={() => {
          hideAlert()
          navigation.navigate('Home')
        }}
      />
      <Icon
        name='mic-off' style={{
          top: Dimensions.get('window').height / 100 - 50,
          left: Dimensions.get('window').width / 1.1
        }}
        fontSize={40}
      />
      <Icon
        name='settings' style={{
          top: Dimensions.get('window').height / 1.5,
          left: Dimensions.get('window').width / 1.1
        }}
        fontSize={40}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#5bbc6d',
    flex: 1,
    paddingTop: 40,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

export default AddScreen
