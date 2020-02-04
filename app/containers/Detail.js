import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  loadProduct = async () => {
    const result = await this.props.dispatch({
      type: 'product/fetch'
    });
    console.log('result', result);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Go Back" onPress={this.goBack} />
        <Button text="Load products" onPress={this.loadProduct} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Detail
