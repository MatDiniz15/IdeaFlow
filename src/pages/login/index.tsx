import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo2.png';
import {MaterialIcons, AntDesign, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

export default function Login (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(true);

    async function getLogin() {
        try {
            setLoading(true);

            if (!email || !password) {
                return Alert.alert("Atenção",'Informe os campos obrigatórios!');
            }

            setTimeout(()=> {
                if(email == 'mat.diniz15@outlook.com' && password == "12345") {
                    Alert.alert("Logado com sucesso!");
                }else{
                    Alert.alert("Usuario ou senha incorreto!");

                }
                setLoading(false);
            },1000)

            
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
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title="Login"
                    IconRigth={MaterialIcons}
                    iconRigthName="email"
                />
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title="Senha"
                    IconRigth={Octicons}
                    iconRigthName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                />
                <Text style={style.titleInput}>Esqueceu a senha?</Text>
            </View>
            <View style={style.boxBottom}> 
                <Button 
                    text="Login"
                    loading={loading}
                    onPress={()=>getLogin()}
                />
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie a sua agora!</Text></Text>

        </View>
    )
}