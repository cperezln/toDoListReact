import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
const GoallItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress = {props.onDelete.bind(this, props.id)}>
            <View style = {styles.listGoal}>
                < Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    listGoal: {
        padding: 10,
        backgroundColor: '#99ffcc',
        borderColor: '#ff9966',
        borderWidth: 1,
        margin: 10,
      }
})
export default GoallItem;