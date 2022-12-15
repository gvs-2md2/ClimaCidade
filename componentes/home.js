import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
 return (
   <View style={styles.bloco}>
        <Text style={styles.texto}>Seja Bem Vindo</Text>

        <View>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Mongagua")}>
                <Text style={styles.txtBotao}>Cidades</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("SP")}>
                    <Text style={styles.textBtn}>SÃO PAULO</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Santos")}>
                    <Text style={styles.textBtn}>SANTOS</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Osasco")}>
                    <Text style={styles.textBtn}>OSASCO</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Itanhaem")}>
                    <Text style={styles.textBtn}>ITANHAÉM</Text>
                </TouchableOpacity>
            </View>
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bloco:{
        marginTop:30
    },
    texto:{
        fontSize:30
    },
    botao:{
        marginTop:20,
        backgroundColor:'#000',
        width:'80%',
        marginLeft:'10%'
        
    },
    txtBotao:{
        fontSize:20,
        color:'#FFF',
        textAlign:'center'
    }
})
