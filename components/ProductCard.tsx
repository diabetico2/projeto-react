
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import { Produto } from '../data';

type Props = {
  produto: Produto;
  onPress: () => void;
  compact?: boolean;         
};

export default function ProductCard({ produto, onPress, compact }: Props) {
  const containerStyle: ViewStyle = compact
    ? styles.containerCompact
    : styles.container;
  const imageStyle: ImageStyle = compact
    ? styles.imageCompact
    : styles.image;
  const titleStyle: TextStyle = compact
    ? styles.titleCompact
    : styles.title;
  const priceStyle: TextStyle = compact
    ? styles.priceCompact
    : styles.price;

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image source={produto.imagem} style={imageStyle} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={titleStyle}>{produto.nome}</Text>
        <Text style={priceStyle}>
          R$ {produto.preco.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const baseContainer = {
  backgroundColor: '#fff',
  borderRadius: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
};

const styles = StyleSheet.create({
  container: {
    ...baseContainer,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },

  containerCompact: {
    ...baseContainer,
    width: '100%',
    marginRight: 12,
    padding: 12,
  },
  imageCompact: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  titleCompact: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 2,
  },
  priceCompact: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
});
