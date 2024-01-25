import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, TouchableOpacity,View,StyleSheet } from 'react-native';
import DiscoverScreen from '../screens/DiscoverScreen';
import CustomScreen from '../screens/CustomScreen';
import WalletScreen from '../screens/WalletScreen';

const Tabs = () => {

    const Tab = createBottomTabNavigator();

    const CustomTabBarButton=({children,onPress})=>(
      <TouchableOpacity style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...styles.shadow

      }} onPress={onPress}>
        <View>
          {children}
        </View>
      </TouchableOpacity>
    )

  return (
    <Tab.Navigator >
      <Tab.Screen name="Discover" component={DiscoverScreen} 
        options={()=>({
          tabBarIcon:({color,size})=>{
              return <Ionicons color={color} size={50} name={"compass"} />

          },
          tabBarInactiveTintColor:"gray",
          headerShown: false,
          tabBarStyle:{
            height:70,
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            ...styles.shadow
          }
      })}
      
      />
      <Tab.Screen name="Custom" component={CustomScreen}
      
      options={()=>({
        tabBarIcon:({color,size})=>{
            return   <Image
            source={require("../../assets/plus.png")}
            resizeMode="contain"
            style={{
              width: 50,
              height: 50,
              backgroundColor: "red",
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              padding: 10, 
            }}
          />

        },
        tabBarInactiveTintColor:"gray",
        headerShown: false,
        tabBarButton:(props)=>(
        <CustomTabBarButton onPress={props.onPress} children={props.children}/>
        )
    })}/>
      <Tab.Screen name="Wallet" component={WalletScreen}  options={()=>({
          tabBarIcon:({color,size})=>{
              return <Ionicons color={color} size={50} name={"star"} />

          },
          tabBarInactiveTintColor:"gray",
          headerShown: false,
          tabBarStyle:{
            height:70,
            borderTopLeftRadius:20,
            borderTopRightRadius:20
          }
      })}/>
    </Tab.Navigator>
  )
}

export default Tabs



const styles=StyleSheet.create({
  shadow:{
    shadowColor:"#7f5df0",
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
})