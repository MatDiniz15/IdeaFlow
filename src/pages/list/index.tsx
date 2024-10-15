import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo2.png';
import {MaterialIcons, AntDesign, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function List() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState("");
    const [loading,setLoading] = useState(false);

    return (
        <View style={style.container}>
            {<Image
                source={require("../../assets/Fundo2.png")} 
                style={style.fundo}   
            />}
            <Text>
            Start Your Journey
            </Text>
        </View>
    //     <View style={style.boxMind}>
    //     <Input 
    //         value={email}
    //         onChangeText={setEmail}
    //         title="Endereço de email"
    //         // IconRigth={MaterialIcons}
    //         // iconRigthName="email"
    //     />
    // </View>
    )
}
