import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo2.png';
import {MaterialIcons, AntDesign, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Routes from "../../routes/index.routes";

export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState("mat.diniz15@outlook.com");
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(true);

    async function getLogin() {
        try {
            setLoading(true)

            if (!email || !password) {
                return Alert.alert("Atenção",'Informe os campos obrigatórios!');
            }

            navigation.reset({routes:[{name:"BottomRoutes"}]});

            Alert.alert("Logado com sucesso!");
            
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
                <TouchableOpacity onPress={()=> navigation.navigate("Password")}>
                    <Text style={style.titleInput}>  Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxBottom}> 
                <Button 
                    text="Login"
                    loading={loading}
                    onPress={()=>getLogin()}
                />
            </View>
            <Text style={style.textBotton}>Não tem conta? <TouchableOpacity onPress={() => navigation.navigate("Register")} > 
                <Text style={{color:themas.colors.primary}}>Crie a sua agora!</Text>
                </TouchableOpacity></Text>

        </View>
    )
}