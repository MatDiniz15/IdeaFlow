import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo2.png';
import {MaterialIcons, AntDesign, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";


export default function userpassword() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [password, setPassword] = useState('123456');
    const [loading,setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(true);



    return (
        <View style={style.container}>
            {<Image
                source={require("../../assets/Fundo2.png")} 
                style={style.fundo}   
            />}
            <View>
                <Text style={style.text}>Criar nova senha</Text>
            </View>
            <View>
                <Text style={style.text2}>Sua senha deve ser diferente da anterior</Text>
            </View>
            <View style={style.boxMind}>
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title="Nova senha"
                    IconRigth={Octicons}
                    iconRigthName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                />
            </View>
            <Text> minimo 8 caracteres</Text>
            <Input 
                    value={password}
                    onChangeText={setPassword}
                    title="Repetir nova senha"
                    IconRigth={Octicons}
                    iconRigthName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                />
            <View style={style.boxBottom}> 
                <Button 
                    text="Criar senha"
                    loading={loading}
                    onPress={()=>getUserPassWord()}
                />
            </View>
        </View>
    )
    
}