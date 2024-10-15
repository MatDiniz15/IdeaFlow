import {Dimensions, LogBox, StyleSheet} from "react-native";
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

    boxTop:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"  
    },
    boxMind:{
        height: Dimensions.get('window').height/4,
        width: '100%',
        // backgroundColor: "green",
        paddingHorizontal: 37,
    }, 
    boxBottom:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        // backgroundColor: "blue",
        alignItems: "center",
        // justifyContent: 'center'
    },
    logo:{
        width: 150,
        height: 120,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20,
    },
    button: {
        width: 250,
        height: 50,
        marginTop:60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themas.colors.primary,  
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: "bold",
         
    },
    textBotton: {
        fontSize: 16,
        color: themas.colors.gray,
        paddingBottom:20,
    }
    
})