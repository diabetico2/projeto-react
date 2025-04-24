
import { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { produtos, Produto } from '../../data';
import ProductCard from '../../components/ProductCard';

export default function UltimosVistos() {
  const [items, setItems] = useState<Produto[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem('recentProdutos');
      const ids: string[] = json ? JSON.parse(json) : [];
      const recentes = ids
        .map(id => produtos.find(p => p.id === id))
        .filter(Boolean) as Produto[];
      setItems(recentes);
    })();
  }, []);

  if (items.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>Nenhum item visualizado ainda.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={p => p.id}
      contentContainerStyle={{ paddingVertical: 16 }}
      renderItem={({ item }) => (
        <ProductCard
          produto={item}
          onPress={() => router.push(`/produto/${item.id}`)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
