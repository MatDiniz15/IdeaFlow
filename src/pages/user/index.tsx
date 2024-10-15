import React from "react";

import { Text, Image, View } from "react-native";
import { style } from "./styles";

export default function User() {
    return (
        <View style={style.container}>
            {<Image
                source={require("../../assets/Fundo2.png")} 
                style={style.fundo}   
            />}
        <Text>
        Ola mundo Usuario
        </Text>

        </View>
    )
    
}