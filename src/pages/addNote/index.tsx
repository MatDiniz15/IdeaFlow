import React, { useState } from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';
import { style } from './styles';
import { Input } from '../../components/input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Login from '../login';
import { Flag } from "../../components/Flag";
import CustomDateTimePicker from "../../components/CustomDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themas } from "../../global/themes";


export default function addNote() {

  const navigation = useNavigation<NavigationProp<any>>()

  return (
    <View style={style.container}>
        <Image
            source={require("../../assets/Fundo2.png")} 
            style={style.fundo}   
        />
        <View style={style.header}>
          <Text style={style.title}>Nova nota</Text>
          <Image style={style.image}        
            source={require("../../assets/estrada.jpeg")}
          />
          <TextInput 
            placeholder="Aqui o usuário poderá escrever suas idéias e anotações importantes!"
            labelStyle={style.label}
            multiline
            numberOfLines={5}
            // value={description}
            // onChangeText={setDescription}
            textAlignVertical="top"
          />     
        </View>
    </View>
  )
}


