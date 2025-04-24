
import { Stack } from 'expo-router';

export default function CategoriasLayout() {
  return (
    <Stack>
      {}
      <Stack.Screen
        name="index"
        options={{ title: 'Itens' }}
      />
      {}
      <Stack.Screen
        name="[categoriaId]"
        options={{ title: 'Categoria' }}
      />
    </Stack>
  );
}
