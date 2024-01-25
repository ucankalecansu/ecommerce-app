import { View, StyleSheet} from "react-native";
import React, {useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import Header from "../../components/Header";
import SwipeableCard from "../../components/SwipeableCard";
import ModalCom from "../../components/Modal";
import CardItem from "../../components/CardItem";
import {data,swipeData} from "../../Data/data";

const DiscoverScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemSwipe,setSelectedItemSwipe]=useState<any>({});
  const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
      const matchedData = data.filter(item => item.title.includes(selectedItemSwipe.text));
      if (matchedData.length > 0) {
        const newData = matchedData.concat(data.filter(item => !item.title.includes(selectedItemSwipe.text)));
        setSortedData(newData);
      } else {
        setSortedData(data);
      }
    

  }, [selectedItemSwipe,data]);

  const renderCard = ({ item }) => (
    <CardItem
    item={item}
    onPress={() => {
      setSelectedItem(item);
      setModalVisible(true);
    }}
  />
  );

  const handleLoginPress = () => {
    console.log("Login butona basıldı");
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const goBack = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header handleLoginPress={handleLoginPress} />
      <SwipeableCard swipeData={swipeData} setSelectedItemSwipe={setSelectedItemSwipe} />
      <Carousel data={sortedData} renderItem={renderCard} sliderWidth={390} itemWidth={340} />
      <ModalCom selectedItem={selectedItem} closeModal={closeModal} goBack={goBack} modalVisible={modalVisible}/>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
 container:{
  backgroundColor:"white",
  height:"100%"
  
 }
});
