import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import axios from 'axios'

import FooterC from '../components/Footer'

const QuotesScreen = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  useEffect(() => {
    const fetchData = () => {
      const url = 'https://api.quotable.io/random'
      axios.get(url).then(res => res.data).then(({ content, author }) => {
        setQuote(content)
        setAuthor(author)
      }).catch((err) => { console.error(err) })
    }
    fetchData()
  }, [])
  return (
    <View style={[styles.outer, { backgroundColor: '#a5864c' }]}>
      <Text style={styles.innerText}>"{quote}"</Text>
      <Text style={{ fontSize: 15, color: '#eee', paddingLeft: 5 }}>- {author}</Text>
      <FooterC />
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
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    padding: 10
  }
})

export default QuotesScreen
