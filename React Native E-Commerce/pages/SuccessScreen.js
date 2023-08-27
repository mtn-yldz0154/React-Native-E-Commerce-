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


function SuccessScreen({ navigation }) {


    return (


        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, height:"100%",justifyContent: "flex-end" }}
                source={{
                    uri: "https://previews.123rf.com/images/teploleta/teploleta1603/teploleta160300017/53220220-seamless-surface-pattern-with-doodle-gift-boxes.jpg"
                }}
                alt="Alternate Text"
                size="xs"
            >

                <View style={{ height: "35%", justifyContent: "center",alignItems:"center" }}>

                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:26,fontWeight:"bold"}}>Success</Text>

                    </View>

                    <View style={{marginVertical:10}}>
                    <Text style={{fontSize:18,fontWeight:"300"}}>Your order will be delivered soon.</Text>
                    <Text style={{fontSize:18,fontWeight:"300"}}>Thank you for choosing our app!</Text>

                    </View>


                    <TouchableOpacity onPress={() => { navigation.navigate("Shop") }} style={appStyles.SuccessScreenContinueShoppingButton}>
                        <Text style={{ color: "white" }}>CONTINUE SHOPPING</Text>
                    </TouchableOpacity>




                </View>


            </ImageBackground>





        </View>






    )
};

export default SuccessScreen;