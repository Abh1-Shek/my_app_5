import { 
  StyleSheet, 
  View, 
  Button,
  FlatList
} from 'react-native';
import { useState  } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';




export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => {
      return [...currentCourseGoals, {
        id: Math.random().toString(),
        text: enteredGoalText
      }];
    });
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
  }


  return (
    <View style = {styles.appContainer}>
      <Button title = 'Add New Goal' 
              color = "#5e0acc"
              onPress = {startAddGoalHandler}/>
      <GoalInput onAddGoal = {addGoalHandler}
                 onDeleteItem = {deleteGoalHandler}
                 onCancel = {endAddGoalHandler} 
                 visible = {modalIsVisible}/>
      <View style = {styles.goalsContainer}>
        <FlatList data={courseGoals}
                  renderItem={
                    itemData => <GoalItem 
                      text = {itemData.item.text}
                      id = {itemData.item.id}
                      onDeleteItem = {deleteGoalHandler}/>
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
