import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
export default function toDoItem({ item, pressHandler }) {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    pressHandler(item.key);
                }}
            >
                <Text style={globalStyles.toDoTxt}>{item.text}</Text>
            </TouchableOpacity>
        </View>
    );
}
