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
      paddingHorizontal:20,
      paddingTop:30,  
    },
    boxInput:{
      width:'85%',
      marginLeft:30,
    },
    boxList: {
        flex: 1,
        width:"100%",
        backgroundColor:'red',    
        justifyContent: 'space-between',

  
    },
    card: {
      width:"40%",
      height:150,
      backgroundColor: '#fff',
      marginTop:6,
      borderRadius: 10,
      justifyContent:"center",
      padding:10,
      borderWidth: 1,
      borderColor:themas.colors.lightGray,
    },
    rowCard: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

    }


    
})