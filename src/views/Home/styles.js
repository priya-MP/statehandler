import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    fieldContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5
    },
    fieldContainer1:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 5
    },
    input: {
        marginLeft: 15,
        width: 200,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d4d4d4',
        fontSize: 12,
        paddingLeft: 10
    },
    btn:{
        width: 80,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d4d4d4',
        marginLeft: 10,
        justifyContent:'center',
        alignItems:'center'
    },

    // ** dropdown
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

      // ** image in multi selector
      imageContainer: {
        marginTop: 20,
        flex: 1,
      },
      image: {
        width: 100,
        height: 100,
        margin: 5,
      },
});

export default styles;