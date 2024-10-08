import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';


// ** styles 
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dashboard = (props) => {
    const [data, setData] = useState([])

    useEffect(async () => {
        async function fetchData() {
            const datalist = await AsyncStorage.getItem('data');
            setData(datalist);
          }
          fetchData();
    }, []);


    const renderField = (label, value) => {
        return (
            <View style={styles.fieldContainer}>
                <Text>{label}:</Text>
                <Text style={styles.title}>{value}</Text>
            </View>
        )
    }

    const Item = ({ item }) => (
        <View style={styles.item}>
            {renderField('Name', item.name)}
            {renderField('Email', item.email)}
            {renderField('Phone', item.phone)}
            {renderField('DoB', item.dob)}
            {renderField('Time', item.time)}
            {renderField('Status', item.staus)}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item, i) => i}
            />
        </View>
    )
}

export default Dashboard;