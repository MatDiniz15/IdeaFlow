import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
    },
    // fundo:{
    //     position:'absolute',
    //     left:-200,
    // },
    header: {
        width: "100%",
        height: 40,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", 
    },
    title: {
        fontSize:25,
        fontWeight: 'bold'
    },
    content: {
        width: "100%",
        // paddingHorizontal: 10,
    },
    image:{
      width: "100%",
      height:"35%",
      borderRadius: 15,
    //   marginLeft: 20   
    },
    text: {
        height: "100%",
        width: "90%",        
    },
    containerFlag: {
        width: "100%",
        padding: 10  
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
    
    

  