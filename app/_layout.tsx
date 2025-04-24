
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* tudo que estiver em (tabs) vira sua TabBar */}
      <Stack.Screen name="(tabs)" />
      {/* detalhes de produto ficam “empilhados” por cima, mas fora da TabBar */}
      <Stack.Screen
        name="produto/[produtoId]"
        options={{ 
          headerShown: true,
          title: 'Detalhes do Produto'
        }}
      />
    </Stack>
  );
}
