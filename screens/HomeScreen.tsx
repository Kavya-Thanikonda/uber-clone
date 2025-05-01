
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

import tw from 'twrnc';

// Required for UUID package used by Google auto complete
import 'react-native-get-random-values';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_MAPS_APIKEY } from '@env';
import { GOOGLE_MAPS_APIKEY } from '../env';

import NavOptions from "@/components/NavOptions";

import { setOrigin, setDestination } from "@/slices/navSlices";


const Home = () => {

    useEffect(() => {
        fetch('https://www.google.com')
          .then(() => console.log('Network OK'))
          .catch(() => console.log('Network issue'));
      }, []);

      const dispatch = useDispatch();

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

            {/* Render google places auto complete */}
            {/* Places API: GooglePlacesSearch */}
            {/* Enable powered by Google - Remove "powered by Google" */}
            {/* Get data and details - NULL by default (only when details are fetched) */}
            {/* Details include geometry, location, coordinates */}
            {/* Store (dispatch into REDUX and selector to get the data) coordinates and render into maps */}
            {/* Debounce: search when there's 400 seconds gap after typing, do the search */}
            {/* ReturnKeyType should search when return is entered */}
            <GooglePlacesAutocomplete
                placeholder="Where from?"
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
                onPress={(data, details = null) => {
                    console.log(data);
                    console.log(details);
                    dispatch(setOrigin({
                        location: details?.geometry.location, // Set Latitude and Longitude
                        description: data.description
                    }))

                    dispatch(setDestination(null)) // Set destination to NULL
                }}
                fetchDetails={true}
                textInputProps={{
                    returnKeyType: 'search'
                }}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                onFail={(error) => console.error('Autocomplete error:', error)}
            />

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
