import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();
function HomeScreen() {
    return <View>
        <Text>Home Screen</Text>
    </View>;
}

export default function AppNavigator() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewsOverview" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}