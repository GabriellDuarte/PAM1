import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Given(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://otageek.com.br/wp-content/uploads/2021/02/Given_Movie_-subanimes-full-hd-online-assistir-scaled-1.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                Por algum motivo, a guitarra que ele amava tocar e o basquete que ele adorava jogar perderam a graça. Essa era a vida de Ritsuka Uenoyama até encontrar Mafuyu Sato. Ritsuka tinha começado a perder seu amor pela música, mas ao ouvir Mafuyu cantar pela primeira vez, a canção ressoou em seu coração e a distância entre os dois começou a encurtar.
                </Text>
            </View>
        </View>
    );
}