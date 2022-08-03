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

export default function SignIn({ navigation }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={globalStyles.container}>
                <Text style={globalStyles.header}>Sign In</Text>
                <TextInput
                    style={globalStyles.textInput}
                    placeholder="Enter your Name"
                    placeholderTextColor="#fff"
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
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={globalStyles.buttonTxt}>Sign In</Text>
                </TouchableOpacity>
                <View>
                    <Text style={globalStyles.here}>
                        Do not have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text className="hoverTxt" style={globalStyles.signNow}>
                            Sign-up Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
