import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  RedditSans_700Bold,
  RedditSans_600SemiBold,
  RedditSans_500Medium,
  RedditSans_400Regular,
} from '@expo-google-fonts/reddit-sans';

import Navigation from './navigation/Navigation';


import { Typo } from './constants/Typography';

export default function App() {

  let [fontsLoaded] = useFonts({
    RedditSans_700Bold,
    RedditSans_600SemiBold,
    RedditSans_500Medium,
    RedditSans_400Regular,
  });
  return (
    // <View style={styles.container}>
    //   <Text style={Typo.heading}>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} >
        <StatusBar
          style="auto"
        />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
