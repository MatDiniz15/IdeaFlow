import React, { useState } from "react";

import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo2.png';
import {MaterialIcons, AntDesign} from "@expo/vector-icons";
import { themas } from "../../global/themes";
export default function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);

            if (!email || !password) {
                return Alert.alert("Atenção",'Informe os campos obrigatórios!');
            }

            setTimeout(()=> {
                if(email == 'mat.diniz15@outlook.com' && password == "123456") {
                    Alert.alert("Logado com sucesso!");
                }else{
                    Alert.alert("Usuario ou senha incorreto!");

                }
                setLoading(false);
            },2000)

            
        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo!</Text>
            </View>
            <View style={style.boxMind}>
                <Text style={style.titleInput}>Email:</Text>
                <View style={style.BoxInput}>
                    <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>Senha:</Text>
                <View style={style.BoxInput}>
                    <TextInput 
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>Esqueceu a senha?</Text>
            </View>
            <View style={style.boxBottom}> 
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {loading?<ActivityIndicator color={'#fff'} size={'small'}/>:<Text style={style.textButton}>Loign</Text>} 
                </TouchableOpacity>
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie a sua agora!</Text></Text>

        </View>
    )
}