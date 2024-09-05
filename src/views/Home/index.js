import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from "moment";
import { isEmpty } from 'lodash';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign'



// ** styles
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const emptyObj = {
    name: "",
    email: "",
    phone: "",
    dob: new Date(),
    time: new Date(),
    status: ""
}

const Home = (props) => {
    const [formData, setFormData] = useState(emptyObj);
    const [data, setData] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [openTimeModal, setOpenTimeModal] = useState(false);

    const { navigation } = props;


    const handleChangeValue = (key, val) => {
        if (key === "dob" || key === "time") {
            setFormData({ ...formData, [key]: val })
        } else {
            setFormData({ ...formData, [key]: val })
        }
    }

    const handleSubmit = async (type) => {
        let datalist = [];
        if (!isEmpty(formData)) {
            Alert.alert("submitted successfully");
            let updatedlist = datalist.push(formData);
            await AsyncStorage.setItem('data', JSON.stringify(updatedlist));
            if (type === "submit") {
                navigation.navigate("Dashboard");
            } else {
                navigation.navigate('Multiselector')
            }
        }else {
            Alert.alert("Request failed");
        }
    }


    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>

            <View style={styles.fieldContainer}>
                <Text>Name:</Text>
                <TextInput
                    keyboardType="default"
                    placeholder="Enter the name"
                    onChange={(e) => handleChangeValue('name', e.nativeEvent.text)}
                    value={formData.name}
                    style={styles.input}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text>Email:</Text>
                <TextInput
                    placeholder="Enter the email"
                    keyboardType="default"
                    onChange={(e) => handleChangeValue('email', e.nativeEvent.text)}
                    value={formData.email}
                    style={styles.input}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text>Phone:</Text>
                <TextInput
                    placeholder="Enter the phone number"
                    keyboardType="numeric"
                    onChange={(e) => handleChangeValue('phone', e.nativeEvent.text)}
                    value={formData.phone}
                    style={styles.input}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text>DoB:</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenModal(true)}>
                    <Text>{
                        moment(formData.dob).format('DD/MM/YYYY')
                    }</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fieldContainer}>
                <Text>Time:</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenTimeModal(true)}>
                    <Text>{
                        moment(formData.time).format('h:mm:ss a')
                    }</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fieldContainer}>
                <Text>Status:</Text>
                <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={[
                        { label: 'Check In', value: 'Check In' },
                        { label: 'Check Out', value: 'Check Out' },
                    ]}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={formData.status}
                    onChange={item => {
                        handleChangeValue('status', item.value)
                    }}
                // renderLeftIcon={() => (
                //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                // )}
                />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.btn} onPress={()=>handleSubmit('submit')}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setFormData({})}>
                    <Text>Clear</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.btn} onPress={()=>handleSubmit('redirect')}>
                <Text>Redirect to Multi Screen</Text>
            </TouchableOpacity>

            {openModal && <DatePicker
                modal
                open={openModal}
                date={formData?.dob}
                mode="date"
                onDateChange={(date) => {
                    setOpenModal(false)
                    handleChangeValue('dob', date)
                }}
                onCancel={() => {
                    setOpenModal(false)
                }}
            />}
            {openTimeModal && <DatePicker
                modal
                open={openTimeModal}
                date={formData?.time}
                mode="time"
                onDateChange={(val) => {
                    setOpenTimeModal(false)
                    handleChangeValue('time', val)
                }}
                onCancel={() => {
                    setOpenTimeModal(false)
                }}
            />}
        </View>
    )
}

export default Home;