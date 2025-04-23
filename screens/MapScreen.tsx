
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const MapScreen = () => {
    return (
        <SafeAreaProvider>
            <Text>Maps page</Text>
        </SafeAreaProvider>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
