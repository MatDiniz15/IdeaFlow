import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";
import { style } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Password() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function getUserPassWord() {
        if (!email) {
            return Alert.alert("Atenção", "Informe o email!");
        }

        try {
            setLoading(true);

            // Navegação para a próxima tela após validação
            navigation.reset({ routes: [{ name: "UserPassword" }] });

            Alert.alert("Código enviado!", "Verifique seu email para continuar.");
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não foi possível enviar o código.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={style.container}>
            <Image
                source={require("../../assets/Fundo2.png")}
                style={style.fundo}
                resizeMode="cover"
            />

            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={style.backButton}
            >
                <Text style={style.backText}>{"<"} Voltar ao login</Text>
            </TouchableOpacity>

            <View>
                <Text style={style.text}>Esqueci a senha</Text>
                <Text style={style.text2}>
                    Insira seu email para receber um código de recuperação.
                </Text>
            </View>

            <View style={style.boxMind}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="Endereço de email"
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />
            </View>

            <View style={style.boxBottom}>
                <Button
                    text="Enviar"
                    loading={loading}
                    onPress={getUserPassWord}
                />
            </View>
        </View>
    );
}
