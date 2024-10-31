import React, { useState } from 'react'
import { Text, View, Image, Button } from 'react-native'
import { style } from './styles'
import { Input } from '../../components/input'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import Login from '../login'

export default function user() {
  const navigation = useNavigation<NavigationProp<any>>()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function getPassWord() {
    navigation.navigate('PassWord')
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
            />
        </View>
    </View>
)
}
