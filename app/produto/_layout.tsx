
import { Stack } from 'expo-router';

export default function ProdutoLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[produtoId]"
        options={{ title: 'Detalhes do Produto' }}
      />
    </Stack>
  );
}
