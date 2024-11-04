import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({

    modalOverLay: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor:themas.colors.trasparent
    },
    container: {
        width: '80%',
        padding: 16,
        backgroundColor:'#fff',
        elevation: 5,
        alignItems:"center",    
    },
    dateText: {
        marginTop: 20,
        fontSize: 18,
        textAlign:"center",
    }


})