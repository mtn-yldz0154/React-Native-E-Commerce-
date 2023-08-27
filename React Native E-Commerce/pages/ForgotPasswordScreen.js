import React from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { appStyles } from '../App.styles';
import { Ionicons } from 'react-native-vector-icons'


function ForgotPasswordScreen({ navigation }) {

    const Stack = createNativeStackNavigator();


    return (


        <SafeAreaProvider style={appStyles.MainBody}>
            <SafeAreaView>


                <View style={appStyles.NavbarContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={appStyles.NavbarText} name="chevron-back" />
                    </TouchableOpacity>

                    <Text style={appStyles.NavbarText}>Forgot Password</Text>

                </View>

                <View style={appStyles.ForgotPasswordTextContainer}>

                    <Text style={{fontSize:14}}>
                        Please, enter your email address. You will receive a link to create a new password via email.
                    </Text>

                </View>



                <View style={appStyles.TextInputContainerForgotPassword}>
                    <TextInput style={appStyles.TextInputField} inputMode='email' placeholder='Email' placeholderTextColor={"grey"}></TextInput>


                </View>



                <View >
                    <TouchableOpacity style={appStyles.LoginButtonContainerForgotPassword}>
                        <Text style={appStyles.LoginButtonText}>SEND</Text>
                    </TouchableOpacity>
                </View>





















            </SafeAreaView>
        </SafeAreaProvider>











    )


};



export default ForgotPasswordScreen;