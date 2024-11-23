import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: themas.colors.background,
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
        color: themas.colors.gray,
        fontWeight: "500",
    },
    title: {
        marginTop: 120,
        fontSize: 24,
        color: "#000",
        fontWeight: "bold",
        textAlign: "left",
    },
    description: {
        marginTop: 10,
        fontSize: 16,
        color: themas.colors.gray,
        textAlign: "center",
        paddingHorizontal: 40,
    },
    inputWrapper: {
        width: "90%",
        marginTop: 20,
    },
    helperText: {
        width: "90%",
        fontSize: 14,
        color: themas.colors.gray,
        textAlign: "left",
        marginTop: 5,
    },
    buttonWrapper: {
        width: "100%",
        paddingHorizontal: 80,
        marginBottom: 50,
    },
});
