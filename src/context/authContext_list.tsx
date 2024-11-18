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
                item:item !== 0 ?item:Date.now(),
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
            let taskList:Array<any> = storageData ? JSON.parse(storageData) : [];

            const itemIndex = taskList.findIndex((task) => task.item === newItem.item)

            if (itemIndex >= 0){
                taskList[itemIndex] = newItem
            }else{
                taskList.push(newItem)
            }
            
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
        setImageUri(null); // Adicione esta linha para limpar a imagem

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

    const handleDelete = async (itemToDelete) => {
        try {
            const storageData = await AsyncStorage.getItem('taskList')
            const taskList:Array<any> = storageData ? JSON.parse(storageData):[]

            const updatedtaskList = taskList.filter(item=>item.item !== itemToDelete.item)

            await AsyncStorage.setItem('taskList',JSON.stringify(updatedtaskList))
            setTaskList(updatedtaskList)

        } catch (error) {
            console.log('Erro ao excluir o item.', error);
        }
    }

    const handleEdit = async (itemToEdit:PropCard) => {
        try {
            setTitle(itemToEdit.title);
            setDescription(itemToEdit.description);
            setSelectedFlag(itemToEdit.flag); // Aqui corrigimos para itemToEdit
            setImageUri(itemToEdit.imageUri); // Corrigimos para acessar o parâmetro correto
    
            const timeLimit = new Date(itemToEdit.timeLimit);
            setSelectedDate(timeLimit);
            onOpen();
            setItem(itemToEdit.item);
        } catch (error) {
            console.log('Erro ao editar',error)
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
                    {imageUri && (
                        <Image 
                            source={{ uri: imageUri }} 
                            style={styles.image}  
                        />
                    )}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleImagePickerPress}>
                         <Text>Escolher Imagem. Clique aqui!</Text>
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
                            </View>
                            <CustomDateTimePicker
                                onDateChange={handleDateChange}
                                setShow={setShowDatePicker}
                                show={showDatePicker}
                                type={'date'}
                            />
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
        <AuthContextList.Provider value={{onOpen,taskList,handleDelete, handleEdit}}>
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