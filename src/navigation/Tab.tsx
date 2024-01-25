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
  const commonTabOptions = {
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={() => ({
          ...commonTabOptions,
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={50} name={'compass'} />
          ),
         
        })}
      />
      <Tab.Screen
        name="Custom"
        component={CustomScreen}
        options={() => ({
          ...commonTabOptions,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/plus.png')}
              resizeMode="stretch"
              style={styles.image}
            />
          ),
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
          ...commonTabOptions,
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={50} name={'star'} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;






