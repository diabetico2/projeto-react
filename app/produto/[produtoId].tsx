import { useEffect } from 'react';
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { produtos } from '../../data';

export default function DetalhesProduto() {
  const { produtoId } = useLocalSearchParams<{ produtoId: string }>();
  const router = useRouter();

  const produto = produtos.find(p => p.id === produtoId);
  if (!produto) return <Text style={styles.notFound}>Produto não encontrado.</Text>;

 useEffect(() => {
   (async () => {
     const json = await AsyncStorage.getItem('recentProdutos');
     const ids: string[] = json ? JSON.parse(json) : [];
     const updated = [produtoId, ...ids.filter(i => i !== produtoId)].slice(0, 10);
     await AsyncStorage.setItem('recentProdutos', JSON.stringify(updated));
   })();
 }, [produtoId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <Image source={produto.imagem} style={styles.image} />
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: { marginBottom: 12, marginLeft: 16 },
  backText: { color: '#007AFF', fontSize: 16 },
  container: { padding: 16, backgroundColor: '#fff' },
  image: { width: '100%', height: 250, borderRadius: 12, marginBottom: 16 },
  nome: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  descricao: { fontSize: 16, lineHeight: 22, marginBottom: 12 },
  preco: { fontSize: 20, fontWeight: '600', color: '#007AFF' },
  notFound: { padding: 16, textAlign: 'center' },
});
