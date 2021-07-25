import React from 'react';
import { Text, View, Image } from 'react-native';

import IllustratorImg from '../../assets/illustration.png';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={IllustratorImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos {`\n`}
        </Text>
        <ButtonIcon title="Entrar com discord" activeOpacity={0.8} />
      </View>
    </View>
  );
}
