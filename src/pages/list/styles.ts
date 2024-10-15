import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    
    fundo:{
        position:'absolute',
        left:-200,
    },
    boxMind:{
        height: Dimensions.get('window').height/8,        
        width: '100%',
        // backgroundColor: "green",
        paddingHorizontal: 20,
        paddingTop: 20, 
        justifyContent: "center"
        
    },
    
})