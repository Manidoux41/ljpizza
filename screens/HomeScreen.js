import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 30 }}>Bienvenue !</Text>
      <Image 
        source={require('../assets/logo.jpg')}
        style={{marginTop:40}}
      />
      <StatusBar style="auto" />
      </View>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent:"center",gap: 30, marginBottom:120, paddingTop: 5}}>
        <Button
        style={styles.buttonclick} 
          title="Inscription"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
        style={styles.buttonclick} 
          title="Connexion"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
      },
      buttonclick: {
        padding: 10,
        borderRadius:20,
      }
})