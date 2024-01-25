import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';


const CardItem = ({ item, onPress }) => {
  return (
    <View style={styles.cardContainer}>
    <Image source={item.imageUri} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardText}>{item.title}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={{ ...styles.buttonText, color: item.color }}>Daha Daha</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default CardItem


const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: "#fff",
      borderRadius: 10,
      elevation: 3,
    },
    cardImage: {
      width: "100%",
      height: 300,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    cardContent: {
      padding: 10,
    },
    cardText: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    button: {
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
    },
  });