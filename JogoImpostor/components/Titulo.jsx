import { StyleSheet, Text } from "react-native";

const Titulo = () => {
    return (
        <Text style={styles.titulo}>Quem é o {'\n'}impostor ?</Text>
    );
};

const styles = StyleSheet.create({

    titulo: {
        textAlign: 'center',
        color: '#ffd941',
        fontSize: 48,
        fontFamily: 'Fredoka_400Regular'
    }
})

export default Titulo;