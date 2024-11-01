import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    fundo:{
        position:'absolute',
        left:-200,
    },
    header:{
      width:'100%',
      height:Dimensions.get('window').height/6,
      // backgroundColor:'blue',
      justifyContent: "center",
      // paddingHorizontal:20,
      paddingTop:30,  
    },
    boxInput:{
      width:'85%',
      marginLeft:30,
    },
    boxList: {
        flex: 1,
        width:"100%",
        // alignItems:"center",
        // backgroundColor:'red',    
    },
    card: {
      width:"50%",
      height:160,
      backgroundColor: '#000',
      marginTop:6,
      borderRadius: 20,
      justifyContent:"center",
      // padding:10,
      borderWidth: 1,
      borderColor:themas.colors.lightGray,
    },
    rowCard: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    rowCardLeft: {
      width:'70%',
      flexDirection:"row",
      gap:10,
      alignItems: "center",
    },
    titleCard: {
      fontSize: 16,
      fontWeight:"bold",
      color:themas.colors.lightGray,
    },
    descriptionCard: {
      color:themas.colors.lightGray
    } 
})