import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SwipeableCard = ({ swipeData }) => {
  return (
    <View style={styles.swipeCardContainer}>
    <Carousel
      data={swipeData}
      renderItem={({ item }) => (
        <View style={styles.swipeCardContent}>
          <View style={{display:"flex",flexDirection:"row", gap:10,alignItems:"center"}}>
          <Image  source={item.img} resizeMode="contain" style={styles.img} />
          <Text>{item.text}</Text>
          </View>
         
        </View>
      )}
      sliderWidth={550}
      itemWidth={120}
    />
  </View>
  )
}

export default SwipeableCard

const styles=StyleSheet.create({
    swipeCardContainer: {
 
        height: 50,
        alignContent:"center",
        margin:10,
      },
      swipeCardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius:10
    
      },
      img: {
        width: 30,
        height: 30,
      },
})