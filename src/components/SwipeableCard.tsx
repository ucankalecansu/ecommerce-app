import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';


interface SwipeableCardProps{
  swipeData:Array<any>,
  setSelectedItemSwipe:any
}

const SwipeableCard = ({ swipeData,setSelectedItemSwipe }:SwipeableCardProps) => {

const SLIDER_WIDTH = Dimensions.get('window').width *0.8
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6)
  return (
    <View style={styles.swipeCardContainer}>
    <Carousel
      data={swipeData}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>setSelectedItemSwipe(item)} style={styles.swipeCardContent}>
              <View style={{display:"flex",flexDirection:"row", gap:10,alignItems:"center"}}>
                <Image  source={item.img} resizeMode="contain" style={styles.img} />
                <Text>{item.text}</Text>
            </View>
        </TouchableOpacity>
      )}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      inactiveSlideShift={2}     
    />
  </View>
  )
}

export default SwipeableCard

const styles=StyleSheet.create({
    swipeCardContainer: {
        height: 50,
        alignContent:"center",
        justifyContent:"center",
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