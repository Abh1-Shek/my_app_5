import { 
  StyleSheet, 
  View, 
  Button, 
  TextInput,
  FlatList
} from 'react-native';
import { useState  } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';




export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => {
      return [...currentCourseGoals, {
        id: Math.random().toString(),
        text: enteredGoalText
      }];
    });
  }


  return (
    <View style = {styles.appContainer}>
      <GoalInput onAddGoal = {addGoalHandler} />
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
 goalsContainer: {
   flex: 5
 },
});
