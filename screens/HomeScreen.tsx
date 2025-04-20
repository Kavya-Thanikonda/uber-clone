
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import tw from 'twrnc';

import NavOptions from "@/components/NavOptions";

const Home = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            {/* "SafeAreaView" accounts for visible area in the App instead of "View" */}
            {/* <Text style={styles.text}>This is Home screen</Text>*/}

            {/* Tailwind CSS for styling using "twrnc" */}
            {/*<Text style={tw`text-red-500 p-10`}>This is Home screen</Text>*/}

            {/* Concatenate styling */}
            {/*<Text style={[tw`text-red-500 p-10`, styles.text]}>This is Home screen</Text>*/}

            {/* Inline styling */}
            {/*<Text style={[tw`text-red-500 p-10`, {color: 'purple'}]}>This is Home screen</Text>*/}

            <View style={tw`p-5`}>
                {/* UBER logo */}
                <Image 
                    style={{ width: 100, height: 100, resizeMode: 'contain' }} // NO right modifier in Tailwind 
                    source={{
                        // uri: uniform resource identifier = URL
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />
            </View>

            <NavOptions/>

        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    },
});
