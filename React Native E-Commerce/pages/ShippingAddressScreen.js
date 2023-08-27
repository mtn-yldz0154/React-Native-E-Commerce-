import React, { useState } from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, TextInput, Image, ImageBackground, ScrollView, Flex, Center, FlatList, Touchable } from 'react-native';
import { appStyles } from '../App.styles';
import { Ionicons, FontAwesome5, FontAwesome, FontAwesome6 } from 'react-native-vector-icons'
import { Card, Button, Icon } from '@rneui/themed'
import { color } from '@rneui/base/dist';
import { RadioButton } from 'react-native-paper';



function ShippingAddressScreen({ navigation }) {


    return (

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>

                <View style={appStyles.MainPageNavbar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={appStyles.NavbarText} name="chevron-back" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", marginLeft: 20, color: "black" }} >Shipping Addresses</Text>
                    <TouchableOpacity style={{ marginRight: 10 }} >
                        <Ionicons style={{ fontSize: 30, }} name="search" />
                    </TouchableOpacity>
                </View>



                <View style={appStyles.CheckoutShippingAddressContainer}>



                    <TouchableOpacity style={appStyles.CheckoutShippingAddressContainerInsideMain}>

                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10, }}>Jane Doe</Text>

                            <TouchableOpacity onPress={() => { navigation.navigate("AddingShippingAddressScreen") }}>
                                <Text style={{ color: "#DB3022", fontSize: 16, marginRight: 5 }}>Edit</Text>

                            </TouchableOpacity>


                        </View>

                        <View style={{ marginVertical: 5, marginLeft: 10, }}>
                            <Text style={{ fontSize: 16 }}>3 Newbridge Court</Text>

                        </View>

                        <View style={{ marginVertical: 5, marginLeft: 10, }}>
                            <Text style={{ fontSize: 16 }}>Chino Hills, CA 91709, United States</Text>

                        </View>



                    </TouchableOpacity>


                </View>


                <View style={appStyles.CheckoutShippingAddressContainer}>



                    <TouchableOpacity style={appStyles.CheckoutShippingAddressContainerInsideMain}>

                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10, }}>John Doe</Text>

                            <TouchableOpacity onPress={() => { navigation.navigate("AddingShippingAddressScreen") }}>
                                <Text style={{ color: "#DB3022", fontSize: 16, marginRight: 5 }}>Edit</Text>

                            </TouchableOpacity>


                        </View>

                        <View style={{ marginVertical: 5, marginLeft: 10, }}>
                            <Text style={{ fontSize: 16 }}>3 Newbridge Court</Text>

                        </View>

                        <View style={{ marginVertical: 5, marginLeft: 10, }}>
                            <Text style={{ fontSize: 16 }}>Chino Hills, CA 91709, United States</Text>

                        </View>



                    </TouchableOpacity>


                </View>

            </SafeAreaView>
        </SafeAreaProvider>


    )
};


export default ShippingAddressScreen;