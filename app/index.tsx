import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 font-extrabold bg-white justify-center items-center">
      <Text className="text-3xl">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="bg-yellow-400">
        Go to Profile
      </Link>
    </View>
  );
}
