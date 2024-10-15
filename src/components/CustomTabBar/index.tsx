import React, { useContext } from "react";
import { Text, Touchable, TouchableOpacity, View  } from "react-native";
import { style } from "./styles";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import { AuthContextList } from "../../context/authContext_list";
 
export default ({state,navigation})=>{

    const {onOpen} = useContext<any>(AuthContextList)

    return (        
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>onOpen()}>
                <View>
                    <Feather 
                        name="plus"
                        size={38}
                        color={"#fff"}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
 }