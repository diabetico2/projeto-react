
import { useState, useRef, useEffect, useMemo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import ProductCard from '../../components/ProductCard';
import { produtos, Produto } from '../../data';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.75;      
const SPACING = 16;                           

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const carouselRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(
    () =>
      produtos.filter(p =>
        p.nome.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const destaques = useMemo(() => {
    const shuffled = [...produtos].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % destaques.length;
      setActiveIndex(next);
      carouselRef.current?.scrollToOffset({
        offset: next * (CARD_WIDTH + SPACING),
        animated: true,
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [activeIndex, destaques.length]);

  const onMomentumScrollEnd = (e: any) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / (CARD_WIDTH + SPACING));
    setActiveIndex(newIndex);
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Cabeçalho */}
      <View style={styles.headerCard}>
        <Text style={styles.welcome}>Bem-vindo ao Catálogo!</Text>
        <Text style={styles.tagline}>Explore nossos produtos.</Text>
      </View>

      {/* Carrossel de Destaques */}
      <View style={styles.destaquesContainer}>
        <Text style={styles.sectionTitle}>Destaques</Text>
        <FlatList
          ref={carouselRef}
          horizontal
          data={destaques}
          keyExtractor={(p: Produto) => p.id}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + SPACING}
          contentContainerStyle={{ paddingHorizontal: SPACING / 2 }}
          onMomentumScrollEnd={onMomentumScrollEnd}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ width: CARD_WIDTH, marginRight: SPACING }}
              onPress={() => router.push(`/produto/${item.id}`)}
            >
              <ProductCard produto={item} onPress={() => router.push(`/produto/${item.id}`)} compact />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Busca */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar produto..."
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Lista de todos */}
      <FlatList
        data={filtered}
        keyExtractor={p => p.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/produto/${item.id}`)}>
            <ProductCard produto={item} onPress={() => router.push(`/produto/${item.id}`)} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerCard: {
    margin: 16,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },
  tagline: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  destaquesContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    marginHorizontal: SPACING,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  searchContainer: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  list: {
    paddingBottom: 16,
  },
});
