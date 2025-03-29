import react, {useState} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./Incremento";

const Incremento = () => {
    const [contador, setContador] = useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.contagem}>Contagem: {contador}</Text>
            <TouchableOpacity 
                onPress={() => setContador(contador + 1)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Incrementar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => setContador(contador - 1)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Decrementar</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Incremento