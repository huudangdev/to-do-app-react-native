import React from 'react'
import { Text } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

const FooterC = () => {
  return (
    <Text style={{ fontSize: 15, color: '#fff', paddingTop: 300, paddingRight: 5 }}>
      <Icon name='copyright' />
      2020 Huu Dang. decoding
    </Text>
  )
}

export default FooterC
