import React from "react";
import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

type Props =  {
    color:string    

}

export function Ball({...rest}:Props){
    return (
        <View style={[style.ball,{borderColor:rest.color||'gray'}]}/>
    )
}