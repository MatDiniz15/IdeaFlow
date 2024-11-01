import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo2.png';
import {MaterialIcons, AntDesign, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";


export default function password() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState("mat.diniz15@outlook.com");
    const [loading,setLoading] = useState(false);

    async function getUserPassWord() {
        try {
            setLoading(true)

            if (!email) {
                return Alert.alert("Atenção",'Informe os campos obrigatórios!');
            }

            navigation.reset({routes:[{name:"StackRoutesUserpassword"}]});

            Alert.alert("Codigo enviado!");
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    
    return (
        <View style={style.container}>
            {<Image
                source={require("../../assets/Fundo2.png")} 
                style={style.fundo}   
            />}
            <View>
                <Text style={style.text}>Esquecia a senha</Text>
            </View>
            <View>
                <Text style={style.text2}>Insira seu email para receber um código de recuperação.</Text>
            </View>
            <View style={style.boxMind}>
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title="Endereço de email"
                    // IconRigth={MaterialIcons}
                    // iconRigthName="email"
                />
            </View>
            <View style={style.boxBottom}> 
                <Button 
                    text="Cadastro"
                    loading={loading}
                    onPress={()=>getUserPassWord()}
                />
            </View>
        </View>
    )
    
}