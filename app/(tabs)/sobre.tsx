
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Sobre() {
  const handleOpenGitHub = () => {
    Linking.openURL('https://github.com/diabetico2');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        {/* Avatar de perfil */}
        <Image
          source={require('../../assets/icon.png')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Allan José de Oliveira Pereira</Text>
        <Text style={styles.info}>Engenharia de Software – 7º período</Text>
        <Text style={styles.info}>Atualmente na Instructiva</Text>

        <TouchableOpacity style={styles.linkRow} onPress={handleOpenGitHub}>
          <Ionicons name="logo-github" size={20} color="#24292e" />
          <Text style={styles.linkText}>github.com/diabetico2</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#eef2f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 4,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  linkText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#0366d6',
    textDecorationLine: 'underline',
  },
});
