import React, { useState } from "react";
import {Text, View, Image, FlatList, TouchableOpacity, } from 'react-native';
import { style } from "./styles";
import { Input } from "../../components/input";
import {MaterialIcons} from '@expo/vector-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, SimpleCard } from "../../../components/Card";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";

type PropCard = {
     item:number,
     title:string,
     description:string,
     flag: 'urgente'|'opcional'
}

const data:Array<PropCard> = [
     {
         item:0,
         title:"Title",
         description:"pagina 10 a 20",
         flag:'urgente'
     },
     {
         item:1,
         title:"Title",
         description:"pagina 10 a 20",
         flag:'urgente'
     },
     {
         item:2,
         title:"Title",
         description:"pagina 10 a 20",
         flag:'urgente',
     },
]
export default function List() {
  const _rendercard = (item:PropCard) => {
    return (
      <TouchableOpacity style={style.card}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            {/* <Ball color="red"/> */}
            <View>
              <Text style={style.titleCard}>{item.title}</Text>
              <Text style={style.descriptionCard}>{item.description}</Text>
            </View> 
          </View>
          <Flag caption="Urgente" color={themas.colors.red}/>
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
              <Text>All notes</Text>
            </View>
              <View style={style.boxList}>
                <FlatList 
                    data={data}
                    style={{marginTop: 30}}
                    keyExtractor={(item,index)=>item.item.toString()}
                    numColumns='2'
                    renderItem={({item,index})=>{return (_rendercard(item))}}
                    

                />

              </View>
            {/* <Text>
            Start Your Journey
            </Text> */}
            
        </View>

    )
}
