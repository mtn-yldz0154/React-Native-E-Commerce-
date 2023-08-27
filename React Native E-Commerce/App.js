import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { appStyles } from "./App.styles";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainPage from "./pages/MainPage";
import ShopScreen from "./pages/ShopScreen";
import CartScreen from "./pages/CartScreen";
import Checkout from "./pages/Checkout";
import SuccessScreen from "./pages/SuccessScreen";
import ShippingAddressScreen from "./pages/ShippingAddressScreen";
import AddingShippingAddressScreen from "./pages/AddingShippingAddressScreen";
import PaymentMethodScreen from "./pages/PaymentMethodScreen";
import OrdersScreen from "./pages/OrdersScreen";
import FavoritesScreen from "./pages/FavoritesScreen";
import ProfileScreen from "./pages/ProfileScreen";
import Shirts from "./pages/Shirts";
import ProductDetails from "./pages/ProductDetail";
import OrdersDetailScreen from "./pages/OrdersDetailScreen";
import CategoryButton from "./CategoryButton";
//import MainTabScreen from './MainTabScreen';

const Tab = createBottomTabNavigator();
const MainTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Shop") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // Assuming you have a library for icons (e.g., react-native-vector-icons)
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: route.name === "Home" ? "Home" : route.name, // Set the label to 'Home' for MainPage and 'Shop' for ShopScreen

        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "#DB3022", // Customize the active tab color
        inactiveTintColor: "gray", // Customize the inactive tab color
      }}
    >
      <Tab.Screen name="Home" component={MainPage} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MainTabScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        {/* Nest the Tab.Navigator inside a Screen component */}
        <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
        <Stack.Screen name="Shirts" component={Shirts} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen
          name="ShippingAddressScreen"
          component={ShippingAddressScreen}
        />
        <Stack.Screen
          name="AddingShippingAddressScreen"
          component={AddingShippingAddressScreen}
        />
        <Stack.Screen
          name="PaymentMethodScreen"
          component={PaymentMethodScreen}
        />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen
          name="OrdersDetailScreen"
          component={OrdersDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
