import React from "react";
import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

type Props =  {
    caption: string;
    color:string    

}

export function Flag({...rest}:Props){
    return (
        <TouchableOpacity style={[style.container,{backgroundColor:rest.color}]}>
            <Text style={{color:'#fff'}}>
                {rest.caption}
            </Text>
        </TouchableOpacity>
    )
}