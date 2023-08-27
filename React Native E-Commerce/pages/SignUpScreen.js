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

function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle = async () => {
    axios.post("http://192.168.1.200:5000/api/account/register", {
      firstName: name,
      lastName: surname,
      userName: username,
      email: email,
      password: password,
    });
    Alert.alert("Kayıt İşlemi Başarılı");
    navigation.navigate("LoginScreen");
  };

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider style={appStyles.MainBody}>
      <SafeAreaView>
        <View style={appStyles.NavbarContainer}>
          <TouchableOpacity>
            <Ionicons style={appStyles.NavbarText} name="chevron-back" />
          </TouchableOpacity>

          <Text style={appStyles.NavbarText}>Sign Up</Text>
        </View>

        <View style={appStyles.TextInputContainer}>
          <TextInput
            style={appStyles.TextInputField}
            inputMode="text"
            placeholder="Name"
            onChangeText={(newText) => {
              setName(newText);
            }}
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            style={appStyles.TextInputField}
            inputMode="text"
            placeholder="Surname"
            placeholderTextColor={"grey"}
            onChangeText={(newText) => {
              setSurname(newText);
            }}
          ></TextInput>
          <TextInput
            style={appStyles.TextInputField}
            inputMode="text"
            placeholder="UserName"
            placeholderTextColor={"grey"}
            onChangeText={(newText) => {
              setUsername(newText);
            }}
          ></TextInput>
          <TextInput
            style={appStyles.TextInputField}
            inputMode="email"
            placeholder="Email"
            placeholderTextColor={"grey"}
            onChangeText={(newText) => {
              setEmail(newText);
            }}
          ></TextInput>
          <TextInput
            style={appStyles.TextInputField}
            inputMode="text"
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"grey"}
            onChangeText={(newText) => {
              setPassword(newText);
            }}
          ></TextInput>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={appStyles.ForgotPasswordTextIconContainer}
          >
            <Text style={{ marginHorizontal: 10, fontSize: 14 }}>
              Already have an account?
            </Text>
            <Ionicons
              style={{ color: "red", fontSize: 18 }}
              name="arrow-forward"
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={handle}
            style={appStyles.LoginButtonContainer}
          >
            <Text style={appStyles.LoginButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.SocialAccountTextContainerSignUp}>
          <Text>Or sign up with social account</Text>
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

export default SignUpScreen;
