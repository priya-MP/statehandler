import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Text, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import { MultiSelect } from 'react-native-element-dropdown';

// ** styles
import styles from '../Home/styles';

const Multiselector = () => {
    const [data, setData] = useState([])
    const [images, setImages] = useState([]);
    const [users, setUsers] = useState([]);


    useEffect(async () => {
        const datalist = await AsyncStorage.getItem('data');
        setData(datalist);
    }, []);

    const handleSelectImages = () => {
        ImagePicker.openPicker({
            multiple: true,
            mediaType: 'photo',
        }).then((selectedImages) => {
            setImages(selectedImages);
        }).catch((error) => {
            console.error('Image selection error:', error);
        });
    };

    const handleSubmit = async () => {
        if (!isEmpty(users) && !isEmpty(images)) {

            await AsyncStorage.setItem('users', users);
            await AsyncStorage.setItem('images', images);

            Alert.alert('Image and User Added Successfully!');

        }
    }

    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn} onPress={handleSelectImages}>
                <Text>Select Image</Text>
            </TouchableOpacity>

            <View style={styles.fieldContainer}>
                <Text>Select User:</Text>
                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    search
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={users}
                    onChange={item => {
                        setUsers(item);
                    }}
                    selectedStyle={{ borderRadius: 12 }}
                />
            </View>


            <ScrollView style={styles.imageContainer}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image.path }}
                        style={styles.image}
                    />
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Multiselector;