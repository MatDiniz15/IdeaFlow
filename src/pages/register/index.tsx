import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo2.png';
import {MaterialIcons, AntDesign, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";


export default function Register() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(true);
    
    return (
        <View style={style.container}>
            {<Image
                source={require("../../assets/Fundo2.png")} 
                style={style.fundo}   
            />}
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={style.backButton}>
                <Text style={style.backText}>{"<"} Voltar ao login</Text>
            </TouchableOpacity>
            <View>
                <Text style={style.text}>Registre-se</Text>
            </View>
            <View>
                <Text style={style.text2}>E comece a fazer a suas anotações</Text>
            </View>
            <View style={style.boxMind}>
                <Input
                    value={name}
                    onChangeText={setName}
                    title="Nome completo"
                />
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title="Endereço de email"
                    // IconRigth={MaterialIcons}
                    // iconRigthName="email"
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
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title="Digite a senha novamente"
                    IconRigth={Octicons}
                    iconRigthName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBottom}> 
                <Button 
                    text="Cadastro"
                    loading={loading}
                    // onPress={()=>getRegister()}
                />
            </View>
        </View>
    )
    
}