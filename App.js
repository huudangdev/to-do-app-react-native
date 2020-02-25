import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen'
import AddScreen from './src/screens/AddScreen'

const navigator = createStackNavigator({
  Home: HomeScreen,
  Add: AddScreen
})

export default createAppContainer(navigator)
