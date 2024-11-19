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
      width:"46%",
      height:160,
      backgroundColor: '#000',
      marginTop:6,
      justifyContent:"center",
      // padding:10,
      borderWidth: 1,
      marginBottom: 15,
      marginHorizontal: 6, // Espaçamento horizontal entre os cartões
      borderRadius: 12,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5, // Sombras em Android
    },
    imageBackground: {
      width: '100%', // Ajusta ao tamanho do cartão
      height: 160, // Altura do cartão
      justifyContent: 'space-around', // Alinha o conteúdo no final
      overflow: 'hidden', // Garante bordas arredondadas funcionais
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo semi-transparente para contraste
        padding: 10, // Espaçamento interno
        paddingTop: 70,
    },
    titleCard: {
        color: '#fff', // Texto em branco para legibilidade
        fontSize: 18,
        fontWeight: 'bold',
    },
    descriptionCard: {
        color: '#fff', // Texto em branco para contraste
        fontSize: 14,
        marginTop: 6,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
  },
  dateText: {
      color: '#FFFFFF',
      fontSize: 12,
  },
  tag: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fundo translúcido para tag
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
  },
  tagText: {
      fontSize: 12,
      fontWeight: '500',
  },
    rowCard: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      padding: 10, // Espaçamento interno
    },
    rowCardLeft: {
      width:'70%',
      flexDirection:"row",
      gap:10,
      alignItems: "center",
    },
    button: {
      backgroundColor:'red',
      justifyContent: 'center',
      alignItems: "center",
      width:70,
      height: 70,
      marginVertical: 50,
      borderRadius: 10,
    },
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    emptyTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      marginBottom: 10,
    },
    emptySubtitle: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
    },
    Title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign:"left",
      // backgroundColor: "blue",
    }
    
})