import React, { useState } from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { appStyles } from "../App.styles";
import { Ionicons } from "react-native-vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainPage from "./MainPage";
function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Stack = createNativeStackNavigator();
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("id", value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  const handler = () => {
    axios
      .post("http://192.168.1.200:5000/api/account/login", {
        userName: username,
        password: password,
      })
      .then((response) => {
        storeData(response.data);
        getData();
        navigation.navigate("MainTabScreen", { screen: "MainPage" });
      })
      .catch((err) => {
        Alert.alert("Bilgilerinizi kontrol ediniz");
        return;
      });
  };

  return (
    <SafeAreaProvider style={appStyles.MainBody}>
      <SafeAreaView>
        <View style={appStyles.NavbarContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={appStyles.NavbarText} name="chevron-back" />
          </TouchableOpacity>

          <Text style={appStyles.NavbarText}>Login</Text>
        </View>

        <View style={appStyles.TextInputContainer}>
          <TextInput
            style={appStyles.TextInputField}
            inputMode="text"
            placeholder="Username"
            onChangeText={(newText) => {
              setUsername(newText);
            }}
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            style={appStyles.TextInputField}
            inputMode="text"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(newText) => {
              setPassword(newText);
            }}
            placeholderTextColor={"grey"}
          ></TextInput>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
            style={appStyles.ForgotPasswordTextIconContainer}
          >
            <Text style={{ marginHorizontal: 10, fontSize: 14 }}>
              Forgot your password?
            </Text>
            <Ionicons
              style={{ color: "red", fontSize: 18 }}
              name="arrow-forward"
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={handler}
            style={appStyles.LoginButtonContainer}
          >
            <Text style={appStyles.LoginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.SocialAccountTextContainerLoginScreen}>
          <Text>Or login with social account</Text>
        </View>

        <View style={appStyles.SocialAccountButtonsContainer}>
          <TouchableOpacity style={appStyles.SocialAccountButtons}>
            <Image
              style={appStyles.LogoImages}
              source={require("../img/google.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={appStyles.SocialAccountButtons}>
            <Image
              style={appStyles.LogoImages}
              source={require("../img/facebook.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default LoginScreen;
