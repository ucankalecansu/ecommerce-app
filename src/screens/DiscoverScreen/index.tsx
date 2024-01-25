import { View, StyleSheet} from "react-native";
import React, {useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import Header from "../../components/Header";
import SwipeableCard from "../../components/SwipeableCard";
import ModalCom from "../../components/Modal";
import CardItem from "../../components/CardItem";

const data = [
  {
    id: 1,
    title: "2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!",
    imageUri: require("../../../assets/cocacola.png"),
    color: "red",
    desc: "Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır. Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır. İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir.",
    modalTitle: "Her Altın Kapakta Bir Coca-Cola + Coffee Keyfi",
  },
  {
    id: 2,
    title: "2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!",
    imageUri: require("../../../assets/sprite.png"),
    color: "green",
    desc: "Sprite Coffee, Sprite lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır. Yeni tatlara açık olanların beğenisini kazanan kahveli Sprite, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır. İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir.",
    modalTitle: "Her Altın Kapakta Bir Sprite + Coffee Keyfi",
  },
];

const swipeData = [
  { id: 1, text: "Fırsat Bul", img: require("../../../assets/icons/search.png") },
  { id: 2, text: "Burger King", img: require("../../../assets/icons/burger.png") },
  { id: 3, text: "Sprite", img: require("../../../assets/icons/sprite.png") },
  { id: 4, text: "Trendyol", img: require("../../../assets/icons/trendyol.png") },
];


const DiscoverScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemSwipe,setSelectedItemSwipe]=useState<any>({});
  const [sortedData, setSortedData] = useState([]);

    // useEffect(() => {
  //     const matchedData = data.filter(item => item.title.includes(selectedItemSwipe.text));
  //     if (matchedData.length > 0) {
  //       const newData = matchedData.concat(data.filter(item => !item.title.includes(selectedItemSwipe.text)));
  //       setSortedData(newData);
  //     } else {
  //       setSortedData(data);
  //     }
    

  // }, [selectedItemSwipe,data]);


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
