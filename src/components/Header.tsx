import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({handleLoginPress}) => {
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
        padding: 5,
        backgroundColor: '#3498db',
    
      },
      logo: {
        width: 70,
        height: 70,
      },
      rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      loginButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
      },
      loginButtonText: {
        color: '#3498db', 
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
