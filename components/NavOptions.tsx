
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';

import tw from 'twrnc';

import { useNavigation } from '@react-navigation/native';

//
// import { StackNavigationProp } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//
type RootStackParamList = {
    Home: undefined;
    MapScreen: undefined;
    EatsScreen: undefined;
  };
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Data array
const data = [
    {
        // Unique keys
        id: '123',
        title: 'Get a ride',
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
        screen: 'MapScreen', // What screen to navigate when clicked
        icon: 'car',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png',
        screen: 'EatsScreen',
        icon: 'fastfood'
    }
]

const NavOptions = () => {

    // Throws error for navigation.navigate
    // const navigation = useNavigation();

    const navigation = useNavigation<NavigationProp>();

    return (
        // Flat list is a component, when we want to render a list of items in React Native optimally
        // Flat list takes in data, there's "render item", every single time it sees item, it renders it
        <FlatList
            data={data}
            horizontal // Vertical list by default
            keyExtractor={(item) => item.id} // Give unique ID, so we can re-render the one with new key instead of everything
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
                    style={tw`p-2 pl-6 pb-6 pt-4 bg-gray-200 m-2 w-40 h-60`}>
                    <View>
                       <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain'}} // Keeps the aspect ratio
                            source={{ uri: item.image }}
                        />

                        <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
                            name='arrowright' 
                            color='white' 
                            type='antdesign' />

                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                    </View>
                </TouchableOpacity>
            )} // For each item, get the restructured item iteself iterating through
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
