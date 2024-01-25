import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface PropsHeader{
  handleLoginPress:()=>void
}

const Header = ({handleLoginPress}:PropsHeader) => {
  return (
    <View style={styles.headerContainer}>
    <Image source={require("../../assets/logo.png")}resizeMode="contain"style={styles.logo} />
    <View style={styles.rightContainer}>
      <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.userIconContainer}>
        <Ionicons color={"white"} size={30} name={"person"} style={{backgroundColor:"black"}} />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({  
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:5
      },
      logo: {
        width: 100,
        height: 100,
      },
      rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      loginButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
      },
      loginButtonText: {
        color: 'white', 
      },
      userIconContainer: {
        borderRadius: 25,
        overflow: 'hidden',
        
      },
      userIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
      },


})
