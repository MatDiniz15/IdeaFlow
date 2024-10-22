import React, { useState } from "react";
import {Text, View, Image, FlatList, TouchableOpacity, } from 'react-native';
import { style } from "./styles";
import { Input } from "../../components/input";
import {MaterialIcons} from '@expo/vector-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, SimpleCard } from "../../../components/Card";

type PropCard = {
     item:number,
     title:string,
     description:string,
     flag: 'urgente'|'opcional'
}

const data:Array<PropCard> = [
     {
         item:0,
         title:"Realizar a lição de casa!",
         description:"pagina 10 a 20",
         flag:'urgente'
     },
     {
         item:1,
         title:"Passear com o cachorro!",
         description:"pagina 10 a 20",
         flag:'urgente'
     },
     {
         item:2,
         title:"Sair para tomar açai!",
         description:"pagina 10 a 20",
         flag:'urgente'
     }
]
export default function List() {
  const _rendercard = (item:PropCard) => {
    return (
      <TouchableOpacity style={style.card}>
        <View style={style.rowCard}>
          {/* <Ball /> */}
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View> 
          {/* <Flag /> */}
        </View>
      </TouchableOpacity>
    )
  }
    return (
        <View style={style.container}>
            {<Image
                source={require("../../assets/Fundo2.png")} 
                style={style.fundo}   
            />}
            <View style={style.header}> 
              <View style={style.boxInput}>
                <Input 
                  IconRigth={MaterialIcons}
                  iconRigthName="search"
                />
              </View>
            </View>
              <View style={style.boxList}>
                <FlatList 
                    data={data}
                    style={{marginTop: 40, paddingHorizontal:30}}
                    keyExtractor={(item,index)=>item.item.toString()}
                    renderItem={({item,index})=>{return (_rendercard(item))}}
                />

              </View>
            {/* <Text>
            Start Your Journey
            </Text> */}
            
        </View>

    )
}
