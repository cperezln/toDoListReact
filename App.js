import React, {useState} from "react";
import { 
  StyleSheet, 
  View, 
  Button, 
  ScrollView, 
  FlatList 
} from "react-native";

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  
  const cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }

  const addGoalHandler = goalTitle => {
     setCourseGoals(currentGoals => [
       ...currentGoals, {key: Math.random().toString(), value: goalTitle}]
      );
      setIsAddMode(false);
    }
  

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    })
  }
  //Creamos un nuevo array con todos los elementos de courseGoals y además enteredGoal
  //(estudiar más sobre esto)

  return (
    <View style={styles.screen}>
      <Button title = "Add new Goal" onPress = {() => setIsAddMode(true)}/>
      <GoalInput visible = { isAddMode } onAddGoal =  { addGoalHandler } onCancel = { cancelGoalAddHandler }/>
      <FlatList data={courseGoals} renderItem={
        itemData =>( 
          <GoalItem 
          id = {itemData.item.key} 
          onDelete = { removeGoalHandler }  
          title = {itemData.item.value}/>)}/>
    </View>
  );
}


//En vez de usar el InLine Styling; vamos a usar variables para estilar
const styles = StyleSheet.create({
  //Vamos a dividir este objeto JS a su vez en distintas partes; screen consiste de toda la pantalla
  screen: {
    padding: 50,
  }
});