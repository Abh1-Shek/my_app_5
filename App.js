import { 
  StyleSheet, 
  View, 
  Button, 
  TextInput,
  FlatList
} from 'react-native';
import { useState  } from 'react';
import GoalItem from './components/GoalItem';





export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => {
      return [...currentCourseGoals, {
        id: Math.random().toString(),
        text: enteredGoalText
      }];
    });
  }


  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput 
          style = {styles.textInput} 
          placeholder='Your Goal!'
          value = {enteredGoalText}
          onChangeText={goalInputHandler}/>
        <Button 
          title = 'add goal!'
          onPress={addGoalHandler}
        />
      </View>
      <View style = {styles.goalsContainer}>
        <FlatList data={courseGoals}
                  renderItem={
                    itemData => <GoalItem text = {itemData.item.text}/>
                    } 
                  keyExtractor = {(item, index) => {
                    return item.id;
                  }}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
   flex: 1,
   paddingTop: 50,
   paddingHorizontal: 16
 },
 inputContainer: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: 24,
   borderBottomWidth: 1,
   borderBottomColor: '#cccccc'
 },
 textInput: {
   borderWidth: 1,
   borderColor: '#cccccc',
   width: '70%',
   marginRight: 8,
   padding: 8
 },
 goalsContainer: {
   flex: 5
 },
});
