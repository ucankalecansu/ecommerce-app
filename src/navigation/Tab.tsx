import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';
import DiscoverScreen from '../screens/DiscoverScreen';
import CustomScreen from '../screens/CustomScreen';
import WalletScreen from '../screens/WalletScreen';
import styles from './styles';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    tabBarStyle: {
      backgroundColor:"#fff",
      borderRadius:15,
      height:70,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={50} name={'compass'} />
          ),
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
         
        })}
      />
      <Tab.Screen
        name="Custom"
        component={CustomScreen}
        options={() => ({
      
          tabBarIcon: () => (
            <Image
              source={require('../../assets/plus.png')}
              resizeMode="stretch"
              style={styles.image}
            />
          ),
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIconStyle:{
            position:"absolute",
            top:-30,
            borderBottomColor:"orange",
            borderWidth:3,
            width:70,
            height:70,
            borderTopColor:"green",
            borderRadius:10,
            borderRightColor:"yellow",
            borderLeftColor:"red",            
          },
          title: '',
        })}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={50} name={'star'} />
          ),
          tabBarInactiveTintColor: 'gray',
        
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;






