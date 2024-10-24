import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { UseCaseProvider, useUseCases } from './src/view/context/UseCaseContext';
import StartIrrigationButton from './src/view/StartIrrigationButton';

import EventBootstrapListenersServiceProvider from './src/providers/EventBootstrapListenersServiceProvider';
import { useEffect } from 'react';
import StopIrrigationButton from './src/view/StoptIrrigationButton';
import BootstrapMessageListenersProvider from './src/providers/BootstrapMessageListenersProvider';

function AppContent() {
  const { stabilishRemoteConnection } = useUseCases();

  useEffect(() => {
      stabilishRemoteConnection.execute();
      EventBootstrapListenersServiceProvider.Bootstrap().boot();
      BootstrapMessageListenersProvider.Bootstrap().boot();
  }, []);


  return (
      <View style={styles.container}>
        <StartIrrigationButton/>
        <StopIrrigationButton/>
        <StatusBar style="auto" />
      </View>
  );
}


export default function App() {

  return (
    <UseCaseProvider>
      <AppContent/>
    </UseCaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
