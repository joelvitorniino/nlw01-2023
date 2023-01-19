import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import Home from '../screens/Home';
import New from '../screens/New';
import Habit from '../screens/Habit'; 

export default function AppRoutes() {
    return (
        <Navigator>
            <Screen name="home" component={Home} />
            <Screen name="new" component={New} />
            <Screen name="habit" component={Habit} />
        </Navigator>
    )
};