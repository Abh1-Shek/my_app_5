import {
    StyleSheet, 
    View, 
    TextInput, 
    Button,
    Modal,
    Image,
} from 'react-native'
import { useState } from 'react'


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    
    function addGoalHandler() {
        if (enteredGoalText != '') {
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style = {styles.inputContainer}>
                <TextInput 
                    style = {styles.textInput} 
                    placeholder='Your Goal!'
                    value = {enteredGoalText}
                    onChangeText={goalInputHandler}/>
                <View style = {styles.buttonContainer}>
                    <View style={styles.button}><Button 
                        title = 'add goal!'
                        onPress={addGoalHandler}
                    /></View>
                    <View style={styles.button}><Button 
                            title = 'Cancel'
                            onPress = {props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
});