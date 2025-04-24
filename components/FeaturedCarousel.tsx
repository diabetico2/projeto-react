

import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { Produto } from '../data';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 80;

type Props = {
  items: Produto[];
};

export default function FeaturedCarousel({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList<Produto>>(null);

  useEffect(() => {
    listRef.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
    });
  }, [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);


  function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const idx = Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH);
    setActiveIndex(idx);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <FlatList
        ref={listRef}
        data={items}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(p) => p.id}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.nome}</Text>
              <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.dots}>
        {items.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeIndex ? styles.dotActive : undefined,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  title: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  card: {
    width: CARD_WIDTH,
    marginHorizontal: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  price: {
    marginTop: 4,
    fontSize: 13,
    color: '#007AFF',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#bbb',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#007AFF',
  },
});
