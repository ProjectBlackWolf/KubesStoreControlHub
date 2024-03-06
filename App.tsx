import React,{ useState, useEffect } from 'react';
import { ControlHub } from './Components/tabs/Kube';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <>
      <View style={styles.container}>
        <ControlHub></ControlHub>
      </View>
    </>
    
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

export default App;