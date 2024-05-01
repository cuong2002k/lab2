import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from '../Screen/Contacts';
import Profile from '../Screen/Profile';
const Stack = createNativeStackNavigator();

const MyRouters = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Contacts} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    );
}

export default MyRouters;
