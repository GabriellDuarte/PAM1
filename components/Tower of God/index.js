import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Given(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'http://vortexcultural.com.br/images/2020/07/tower-of-god.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                A Torre de Deus. Um mundo repleto de um misterioso poder chamado Shinsu, e povoado pelos "regulares", os indivíduos dotados desse poder. Dizem as lendas que quem alcançar o topo da Torre terá seus desejos realizados. Os guardiões da Torre selecionam "regulares" para participar das provações da torre e tentar alcançar seu ápice. Mas Bam, o protagonista, é um "irregular" - ele entrou sem ser convidado, abrindo sozinho os portões da Torre, tudo para reencontrar Rachel, sua única amiga no mundo!
                </Text>
            </View>
        </View>
    );
}