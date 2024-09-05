import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        height: 200,
        width: 290
    },
    fieldContainer: {
        margin: 2,
        display:'flex',
        flexDirection:'row'
    },
    title: {
        fontWeight: 'bold',
        color: '#333',
        paddingRight: 10
    }
});

export default styles;