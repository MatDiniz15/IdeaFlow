import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    tabArea: {
        flexDirection: "row",
        height: 0,
        justifyContent: "flex-end",
        paddingRight: 20, 
        
    },
    tabItem: {   
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        borderRadius: 35,
        zIndex: 9999,
        top: -90,
        backgroundColor: "#000"

    }

})