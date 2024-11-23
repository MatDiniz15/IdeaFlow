import React from "react";
import {
  ActivityIndicator,
  TouchableHighlightProps,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { style } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Props = TouchableHighlightProps & {
  onPress: () => void;
};

export function Goback({ onPress, ...rest }: Props) {
  const navigation = useNavigation<NavigationProp<any>>();

  async function getLogin() {
    navigation.navigate("Login");
  }
  return (
    <TouchableOpacity onPress={getLogin} style={style.gobackButton} {...rest}>
      <Text style={style.gobackText}>&lt; Voltar ao inicio</Text>
      <View style={style.line} />
    </TouchableOpacity>
  );
}
