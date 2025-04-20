import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';

import tw from 'twrnc';

// Data array
const data = [
    {
        // Unique keys
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen', // What screen to navigate when clicked
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    }
]

const NavOptions = () => {
    return (
        // Flat list is a component, when we want to render a list of items in React Native optimally
        // Flat list takes in data, there's "render item", every single time it sees item, it renders it
        <FlatList
            data={data}
            horizontal // Vertical list by default
            keyExtractor={(item) => item.id} // Give unique ID, so we can re-render the one with new key instead of everything
            renderItem={({ item }) => (
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                       <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain'}} // Keeps the aspect ratio
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                        <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
                            name='arrowright' 
                            color='white' 
                            type='antdesign' />
                    </View>
                </TouchableOpacity>
            )} // For each item, get the restructured item iteself iterating through
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
