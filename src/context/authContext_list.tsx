import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Alert, Dimensions, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { Modalize } from "react-native-modalize";
import { Input } from "../components/input";
import { style } from "../pages/login/styles";
import { themas } from "../global/themes";
import { Flag } from "../components/Flag";
import CustomDateTimePicker from "../components/CustomDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';


export const AuthContextList:any = createContext({});

const flag = [
    {caption: 'Importante', color: "red"},
    {caption: 'Estudo', color: themas.colors.blueLigth},
    {caption: "Trabalho", color: "black"}  
]

export const AuthProviderList = (props:any):any => {
    const modalizeRef = useRef<Modalize>(null); 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFlag, setSelectedFlag] = useState('urgente');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [item, setItem] = useState(0);
    const [taskList, setTaskList] = useState([]);
    const [image, setImage] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);
    

    const onOpen = ()=> {
        modalizeRef.current?.open();
    }

    const onClose = ()=> {
        modalizeRef.current?.close();
    }

    useEffect(()=>{
        get_taskList()
    },[])

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
                imageUri,
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
            onClose()
            
        } catch (error) {
            console.log("deu ruim:",error);
        }

    };

    const handleImagePickerPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only allow images
          allowsEditing: true,
          aspect: [1, 1], // Optional: enforce square aspect ratio
          quality: 1,
        });
        if (!result.canceled) {
          setImageUri(result.assets[0].uri); // Set the selected image URI
        }
      };

    const setData = () => {
        setTitle('')
        setDescription('')
        setSelectedFlag('Important')
        setItem(0) 
        setSelectedDate(new Date())

    }

    async function get_taskList() {
        try {
            const storageData = await AsyncStorage.getItem("taskList");
            const taskList = storageData ? JSON.parse(storageData):[]
            setTaskList(taskList)
        } catch (error) {
            console.log(error)            
        }
    }

    const _container = () => { 
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>onClose()}>
                            <MaterialIcons
                                name="close"
                                size={30}                        
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>Criar nota</Text>
                        <TouchableOpacity onPress={()=>handleSave()}>
                            <AntDesign
                                name="check"
                                size={30}  
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleImagePickerPress}>
                         <Text>Open Picker</Text>
                    </TouchableOpacity>
                        <TextInput
                            placeholder="Titulo:"
                            labelStyle={styles.label}
                            value={title}
                            onChangeText={setTitle}
                        />
                        <TextInput 
                            // title="Descrição:"
                            placeholder="Digite o seu texto aqui!"
                            labelStyle={styles.label}
                            height={200}
                            multiline
                            numberOfLines={5}
                            value={description}
                            onChangeText={setDescription}
                            textAlignVertical="top"
                        />

                        <View style={{width:'10%'}}>
                            <View style={{flexDirection:'row', gap:10, width:'100%'}}>
                                <TouchableOpacity  onPress={()=>setShowDatePicker(true)} style={{width:200}}>
                                    <Input 
                                        title="Data"
                                        labelStyle={styles.label}
                                        editable={false}
                                        value={selectedDate.toLocaleDateString()}
                                        onPress={()=>setShowDatePicker(true)}
                                    />
                                </TouchableOpacity>
                                {/* <TouchableOpacity style={{width:120}} onPress={()=>setShowTimePicker(true)}>
                                    <Input 
                                        title="Hora Limite"
                                        labelStyle={styles.label}
                                        editable={false}
                                        value={selectedTime.toLocaleTimeString()}
                                        onPress={()=>setShowTimePicker(true)}
                                    />
                                </TouchableOpacity> */}
                            </View>
                            <CustomDateTimePicker
                                onDateChange={handleDateChange}
                                setShow={setShowDatePicker}
                                show={showDatePicker}
                                type={'date'}
                            />
                            {/* <CustomDateTimePicker
                                onDateChange={handleTimeChange}
                                setShow={setShowTimePicker}
                                show={showTimePicker}
                                type={'time'}
                            /> */}
                        </View>
                        <View style={styles.containerFlag}>
                            <Text style={styles.label}>Flag:</Text>
                            <View style={styles.rowFlag}>
                                {_renderFlag()}
                            </View>
                        </View>
                    </View>
            </KeyboardAvoidingView>
        )
    }

    return (
        <AuthContextList.Provider value={{onOpen,taskList}}>
            {props.children}
            <Modalize
                ref={modalizeRef}
                childrenStyle={{height: Dimensions.get('window').height/1.0}}  
                adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>
        </AuthContextList.Provider>

    )

}
export const useAuth = ()=> useContext(AuthContextList);  

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 800,
        flex: 1,  
    },
    header: {
        width: "100%",
        height: 50,
        paddingHorizontal: 10,
        flexDirection: "row",
        // marginTop: 10,
        justifyContent: "space-between",
        alignItems: "center",   

        
    },
    title: {
        fontSize:20,
        fontWeight: 'bold'    
    },
    content: {
        width: "100%",
        // height: 0,
        paddingHorizontal: 10,
        
    },
    image:{
        width: "100%",
        height:"35%",
        borderRadius: 15,
      //   marginLeft: 20   
      },
    containerFlag: {
        width: "90%",
        padding: 10,
        backgroundColor: "",
    },
    label: {
        fontWeight:'bold',
        color:'#000',
    },
    rowFlag: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,


    }


})