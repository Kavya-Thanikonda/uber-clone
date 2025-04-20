
import { StyleSheet, View, Text } from 'react-native';

import { Provider } from 'react-redux';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from '../../store';

import Home from '@/screens/HomeScreen';

export default function HomeScreen() {
  return (
    // Provider to wrap the APP around REDUX
    <Provider store={store}>
      <SafeAreaProvider>
        {/* View instead of DIV in react-native as DIV is a HTML for web */}
        {/* View component in compounds into IOS / Android when build */}
        {/* Style instead of classname in react-native */}
        {/*<View style={styles.container}></View>*/}
        <Home/>
      </SafeAreaProvider>
    </Provider>
  );
}

// CSS like styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

// Metro bundler to run local code environment on Phone when used the same WiFi
// IOS requires XCode
// Android requires Android Studio
