
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { produtos, Produto, categorias } from '../../../data';
import ProductCard from '../../../components/ProductCard';

export default function ProdutosPorCategoria() {
  const { categoriaId } = useLocalSearchParams<{ categoriaId: string }>();
  const router = useRouter();
  const [nomeCategoria, setNomeCategoria] = useState<string>('');

  useEffect(() => {
    const cat = categorias.find(c => c.id === categoriaId);
    setNomeCategoria(cat?.nome ?? 'Categoria');
  }, [categoriaId]);

  const lista = produtos.filter(p => p.categoriaId === categoriaId);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Cabeçalho sem botão de volta azul */}
      <View style={styles.headerCard}>
        <Text style={styles.title}>{nomeCategoria}</Text>
        <Text style={styles.count}>
          {lista.length} produto{lista.length !== 1 ? 's' : ''}
        </Text>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(p: Produto) => p.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard
            produto={item}
            onPress={() => router.push(`/produto/${item.id}`)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  headerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  count: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  list: {
    paddingBottom: 16,
  },
});
