import React, { useState } from   'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
    
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => { setEnteredGoal(enteredText) }
    return(
        <Modal visible = { props.visible } animationType = "slide">
            <View style={styles.inputContainer}> 
                <TextInput 
                placeholder = "Course goal!" 
                style={styles.input} 
                onChangeText = {goalInputHandler}
                value = {enteredGoal}
                />
                <View style = {styles.buttonContainer}>
                    <Button title = "Cancel" color = "red" onPress = {props.onCancel}/>
                    <Button title="Add me!" onPress = {props.onAddGoal.bind(this, enteredGoal)}/>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    input: {
        width: '70%',
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
    },    
    inputContainer : {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },
})

export default GoalInput;


