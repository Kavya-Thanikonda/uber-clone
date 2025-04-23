
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/screens/HomeScreen';
import MapScreen from '@/screens/MapScreen';
import EatsScreen from '@/screens/EatsScreen';

const RootNavigator = () => {

    // Create stack using react native navigation
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            {/* Include all the screens that we can possibly navigate to */}
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='EatsScreen'
              component={EatsScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
    )
}

export default RootNavigator;
