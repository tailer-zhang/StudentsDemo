import React from 'react';
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
import Main from "./src/main";
import MindEvaluate from "./src/MindEvaluate";
import Recruitment from "./src/Recruitment";
import MindVideo from "./src/MindVideo";
import MindFM from "./src/MindFM";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={[backgroundStyle,{flex:1}]}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={Main} />
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
