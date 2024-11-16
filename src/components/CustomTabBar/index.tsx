import React, { useContext } from "react";
import { Text, Touchable, TouchableOpacity, View  } from "react-native";
import { style } from "./styles";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import { AuthContextList } from "../../context/authContext_list";
import { NavigationProp, useNavigation } from "@react-navigation/native";

 
export default ()=>{

    {}
    const {onOpen} = useContext<any>(AuthContextList)
    // const navigation = useNavigation<NavigationProp<any>>();


    return (        
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=> onOpen()}>
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