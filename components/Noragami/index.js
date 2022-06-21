import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Noragami(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://img1.ak.crunchyroll.com/i/spire2/e81af69b67788b5bfda50b2789bbc7ee1481243074_full.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                    Yato é um deus menor, mas está determinado a ser grande. Ele tem um plano, mas infelizmente as coisas não se dão como ele quer.
                </Text>
            </View>
        </View>
    );
}