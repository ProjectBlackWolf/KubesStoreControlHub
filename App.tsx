import React, { useState, useEffect } from 'react';
import { ControlHub } from './Components/tabs/Kube';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NewCommand from './Components/tabs/NewCommand';

function App() {
  let nav = navigator;
  return (
    <>
      <View style={styles.container}>
        <ControlHub>
          
        </ControlHub>
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