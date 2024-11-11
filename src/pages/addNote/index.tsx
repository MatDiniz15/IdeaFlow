import React, { createContext, useContext, useState, } from 'react';
import { Text, View, Image, Button, TextInput, Alert } from 'react-native';
import { style } from './styles';
import { Input } from '../../components/input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Login from '../login';
import { Flag } from "../../components/Flag";
import CustomDateTimePicker from "../../components/CustomDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themas } from "../../global/themes";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export const AuthContextList:any = createContext({});

const flag = [
  {caption: 'Importante', color: "red"},
  {caption: 'Estudo', color: themas.colors.blueLigth},
  {caption: "Trabalho", color: "black"}  
]

export default function addNote() {
  

  const navigation = useNavigation<NavigationProp<any>>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFlag, setSelectedFlag] = useState('urgente');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [item, setItem] = useState(0);
  const [taskList, setTaskList] = useState([])
  

  const _renderFlag = () => {
    return (
        flag.map((item,index)=>(
            <TouchableOpacity key={index}
                onPress={()=>{
                    setSelectedFlag(item.caption)
                }}
            >
                <Flag 
                    caption={item.caption}
                    color={item.color}
                    selected={item.caption == selectedFlag}
                />
            </TouchableOpacity>
        )))
}
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSave = async() => {
    if(!title || !description || !selectedFlag){
      return Alert.alert("Atenção", "Preencha todos os campos!")
    }
      try {
        const newItem = {
          item:Date.now(),
          title,
          description,
          flag:selectedFlag,
          timeLimit:new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
          ).toISOString(),
        }
        const storageData = await AsyncStorage.getItem('taskList');
            // console.log(storageData)
            let taskList = storageData ? JSON.parse(storageData) : [];
            
            taskList.push(newItem)
            await AsyncStorage.setItem('taskList',JSON.stringify(taskList))

            setTaskList(taskList)
            setData()
        
      } catch (error) {
        console.log("deu ruim:",error);
      }
  } 

  const setData = () => {
    setTitle('')
    setDescription('')
    setSelectedFlag('Important')
    setItem(0) 
    setSelectedDate(new Date())
}

  return (
    <View style={style.container}>
        <View style={style.header}>
          <Text style={style.title}>Nova nota</Text>
          <TouchableOpacity onPress={()=>handleSave()}>
            <AntDesign
              name="check"
              size={30}  
            />
          </TouchableOpacity>
        </View>
          <View style={style.content}>
            <Image style={style.image}        
              source={require("../../assets/estrada.jpeg")}
            />
            <TouchableOpacity>
            <AntDesign
              name="picture"
              size={30} 
            />
            </TouchableOpacity>

            <TextInput 
              placeholder="Aqui o usuário poderá escrever suas idéias e anotações importantes!"
              labelStyle={style.label}
              height={250}
              multiline
              numberOfLines={5}
              value={description}
              onChangeText={setDescription}
              textAlignVertical="top"
            /> 
            <View style={{width:'30%'}}>
              <View style={{flexDirection:'row', gap:10, width:'100%'}}>
                <TouchableOpacity>
                  <Input
                    title='Data:'
                    labelStyle={style.label}
                    editable={false}
                    value={selectedDate.toLocaleDateString()}
                  />
                </TouchableOpacity>
              </View>
                <CustomDateTimePicker
                  onDateChange={handleDateChange}
                  setShow={setShowDatePicker}
                  show={showDatePicker}
                  type={'date'}
                />
            </View>
            <View style={style.containerFlag}>
              <Text style={style.label}>Flag:</Text>
              <View style={style.rowFlag}>
                {_renderFlag()}
              </View>
            </View>
          </View>    
        
    </View>
  )
}

// return (
//   <AuthContextList.Provider value={{taskList}}>
//       {props.children}
//       {_container()}
//   </AuthContextList.Provider>

// )

