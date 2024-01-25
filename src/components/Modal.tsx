import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ModalComProps{
  selectedItem:any,
  closeModal:()=>void,
  modalVisible:boolean,
  goBack:()=>void
}

const ModalCom = ({selectedItem,closeModal,modalVisible,goBack}:ModalComProps) => {
  return (
    <Modal transparent={true} visible={modalVisible} onRequestClose={closeModal}>
    <View style={styles.modalBackground}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} showsVerticalScrollIndicator={false}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Ionicons color={"white"} size={20} name={"arrow-back-outline"} />
          </TouchableOpacity>
          <Image source={selectedItem?.imageUri} style={styles.modalImage} />
          <Text style={styles.modalTitle}>{selectedItem?.modalTitle}</Text>
          <Text style={styles.modalDesc}>{selectedItem?.desc}</Text>
          <TouchableOpacity style={styles.joinButton} onPress={closeModal}>
            <Text style={styles.joinButtonText}>Katıl</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  </Modal>
  )
}

export default ModalCom

const styles=StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
      },
      modalContainer: {
        backgroundColor: "white",
        width: "100%",
        padding: 20,
      },
      modalImage: {
        width: "100%",
        height: 350,
        borderRadius: 10,
      },
      modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
      },
      modalDesc: {
        fontSize: 16,
        textAlign: "left",
        marginHorizontal: 20,
        marginTop: 10,
      },
      joinButton: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "red",
      },
      joinButtonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
      },
      backButton: {
        position: "absolute",
        top: 20,
        left: 20,
        padding: 10,
        zIndex: 1,
      },
      backButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      },
})