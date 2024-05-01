import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { PaperProvider } from 'react-native-paper';
import BottomTabNavigator from './Routers/BottomTabNavigator';
import DrawerNavigator from './Routers/DrawerNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        {/* <BottomTabNavigator /> */}
        <DrawerNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}




