import React, { useContext, useRef, useState } from "react";
import {Text, View, Image, FlatList, TouchableOpacity, } from 'react-native';
import { style } from "./styles";
import { Input } from "../../components/input";
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, SimpleCard } from "../../../components/Card";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { formatDateToBR } from "../../global/functions";
import { Swipeable } from "react-native-gesture-handler";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";

export default function List() {

  const navigation = useNavigation<NavigationProp<any>>();

  const {taskList} = useContext<AuthContextType>(AuthContextList)
  const swipeableRefs = useRef([]);

  const renderRightActions = () => {
    return (
      <View style={style.button}>
        <AntDesign
          name="delete"
          size={20}
          color={'#fff'}
        />
      </View>
    )
  }
  const renderLeftActions = () => {
    return (
      <View style={[style.button,{backgroundColor:themas.colors.blueLigth}]}>
        <AntDesign
          name="edit"
          size={20}
          color={'#fff'}
        />
      </View>
    )

  }

  const _renderCard = (item: PropCard, index) => {
      const color = item.flag === 'Estudo' ? themas.colors.blueLigth : themas.colors.red;
  
      return (
          <View style={style.card}>
              <TouchableOpacity onPress={() => navigation.navigate("StackRoutesaddNote")}>
                  <Swipeable
                      ref={(ref) => swipeableRefs.current[index] = ref}
                      key={index}
                      renderRightActions={renderRightActions}
                  >
                      <ImageBackground
                          source={{ uri: item.imageUri }}
                          style={style.imageBackground}
                          imageStyle={{ borderRadius: 12 }}
                      >
                          <View style={style.overlay}>
                              <Text style={style.titleCard}  numberOfLines={1}>{item.title}</Text>
                              <Text style={style.descriptionCard}  numberOfLines={1}>{item.description}</Text>
                              <View style={style.footer}>
                                  <Text style={style.dateText}>{formatDateToBR(item.timeLimit)}</Text>
                                  <View style={style.tag}>
                                      <Text style={[style.tagText, { color }]}>{item.flag}</Text>
                                  </View>
                              </View>
                          </View>
                      </ImageBackground>
                  </Swipeable>
              </TouchableOpacity>
          </View>
      );
  };
  
    return (
        <View style={style.container}>
            <Image
                source={require("../../assets/Fundo2.png")} 
                style={style.fundo}   
            />
            <View style={style.header}> 
              <View style={style.boxInput}>
                <Input
                  IconRigth={MaterialIcons}
                  iconRigthName="search"
                />
              </View>
              <Text>All notes</Text>
            </View>
              <View style={style.boxList}>
                <FlatList 
                    data={taskList}
                    style={{marginTop: 30}}
                    keyExtractor={(item,index)=>item.item.toString()}
                    numColumns='2'
                    renderItem={({item,index})=>{return (_renderCard(item, index))}}
                />

              </View>
            {/* <Text>
            Start Your Journey
            </Text> */}
            
        </View>

    )
}
