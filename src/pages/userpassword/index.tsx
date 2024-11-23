import React, { useState } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Octicons } from "@expo/vector-icons";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function UserPassword() {
    const navigation = useNavigation<NavigationProp<any>>();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const handleCreatePassword = () => {
        if (password.length < 8) {
            Alert.alert("Erro", "A senha deve ter no mínimo 8 caracteres.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não correspondem.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            Alert.alert("Sucesso", "Senha criada com sucesso!");
            ;
        }, 1000);
    };

    return (
        <View style={style.container}>
            {/* Background Image */}
            <Image source={require("../../assets/Fundo2.png")} style={style.fundo} />

            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={style.backButton}>
                <Text style={style.backText}>{"<"} Voltar ao login</Text>
            </TouchableOpacity>

            {/* Title */}
            <Text style={style.title}>Criar nova senha</Text>

            {/* Subtitle */}
            <Text style={style.description}>
                Sua senha deve ser diferente da senha anterior
            </Text>

            {/* Input: Nova Senha */}
            <View style={style.inputWrapper}>
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="Nova senha"
                    IconRigth={Octicons}
                    iconRigthName={showPassword ? "eye-closed" : "eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <Text style={style.helperText}>8 caracteres mínimos</Text>

            {/* Input: Confirmar Senha */}
            <View style={style.inputWrapper}>
                <Input
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    title="Repetir nova senha"
                    IconRigth={Octicons}
                    iconRigthName={showPassword ? "eye-closed" : "eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />
            </View>

            {/* Submit Button */}
            <View style={style.buttonWrapper}>
                <Button
                    text="Criar senha"
                    loading={loading}
                    onPress={handleCreatePassword}
                />
            </View>
        </View>
    );
}
