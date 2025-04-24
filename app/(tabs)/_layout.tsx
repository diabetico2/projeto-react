import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'ellipse';

            switch (route.name) {
              case 'index':
                iconName = 'home-outline';
                break;
              case 'categorias':
                iconName = 'list-outline';
                break;
              case 'sobre':
                iconName = 'information-circle-outline';
                break;
              case 'ultimos':
                iconName = 'time-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            height: 60,
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderTopColor: '#ccc',
          },
          tabBarItemStyle: {
            paddingTop: 8,
          },
        })}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="categorias" />
        <Tabs.Screen name="sobre" />
        <Tabs.Screen name="ultimos" />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
});
