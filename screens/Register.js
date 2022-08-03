import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Register({ navigation }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={globalStyles.container}>
                <Text style={globalStyles.header}>Registration</Text>
                <TextInput
                    style={globalStyles.textInput}
                    placeholder="Enter your Name"
                    placeholderTextColor="#fff"
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={globalStyles.textInput}
                    placeholder="Enter your e-mail"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={globalStyles.textInput}
                    placeholder="Enter your Password"
                    placeholderTextColor="#fff"
                    keyboardType="numeric"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity
                    style={globalStyles.button}
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={globalStyles.buttonTxt}>Continue</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
