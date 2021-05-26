import React, {
  useEffect,
  useState
} from 'react';
import type {Node} from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

import storage from "./src/Storage";

import Main from "./src/main";
import MindEvaluate from "./src/MindEvaluate";
import Recruitment from "./src/Recruitment";
import MindVideo from "./src/MindVideo";
import MindFM from "./src/MindFM";
import SplashScreen from 'react-native-splash-screen';
import Welcome from "./src/Welcome";

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [mainRoute,setMainRoute] = useState('Welcome')
  useEffect(() => {
    storage.load({key :'launchState'}).then(res=>{
      if(res&&res.firstLaunch) {
        setMainRoute('Main')
      }
      SplashScreen.hide();
    }).catch(()=>{
      SplashScreen.hide();
    })

  })
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={[backgroundStyle,{flex:1}]}>
          <Stack.Navigator headerMode="none">
            {mainRoute=='Welcome'&&<Stack.Screen name="Welcome" component={Welcome} />}
            <Stack.Screen options={{gestureEnabled: false}} name="Main" component={Main} />
            <Stack.Screen name="MindEvaluate" component={MindEvaluate} />
            <Stack.Screen name="Recruitment" component={Recruitment} />
            <Stack.Screen name="MindVideo" component={MindVideo} />
            <Stack.Screen name="MindFM" component={MindFM} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
