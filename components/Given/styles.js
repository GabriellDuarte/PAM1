import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 20
    },
    texto:{
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    img:{
        width:350,
        height: 450,
        borderTopRightRadius: 20,
        borderTopLeftRadius:20
    },
    card:{
        backgroundColor:'#FFF',
        borderRadius: 20,
        width:350,
        marginBottom: 20
    }
});

export default styles;