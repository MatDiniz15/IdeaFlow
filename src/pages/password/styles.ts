import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },

    fundo:{
        position:'absolute',
        left:-200,
    },

    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
    },

    backText: {
        fontSize: 14,
        color: "#000",
        fontWeight: "500",
    },

    text: {
        fontWeight: "bold",
        fontSize: 32,
        marginBottom: 16,
        textAlign: "center",
        color: "#000",
    },

    text2: {
        fontSize: 14,
        textAlign: "left",
        color: themas.colors.gray,
        marginHorizontal: 20,
    },

    boxMind: {
        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 20,
    },

    boxBottom: {
        width: "100%",
        paddingHorizontal: 80,
        marginBottom: 50,
    },

    button: {
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themas.colors.primary,
        borderRadius: 25,
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
        color: "#fff",
        fontWeight: "bold",
    },
});
