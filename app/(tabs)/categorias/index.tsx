import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { categorias, Categoria } from '../../../data';

export default function Categorias() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      {/* Card geral */}
      <View style={styles.card}>
        <Text style={styles.header}>Categorias</Text>
        <FlatList
          data={categorias}
          keyExtractor={(c: Categoria) => c.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => router.push(`/categorias/${item.id}`)}
            >
              <Text style={styles.itemText}>{item.nome}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#222',
  },
  list: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
