import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'



function BreathingExercises({ item, navigation }){

const onPressStartExercise = () => {}

function breathingExercisesItem({ item }){
return (
<View style={styles.breathing_exercises_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.exercise_title} numberOfLines={1}>{item.exercise_title}</Text>
<Text style={styles.exercise_description}>{item.exercise_description}</Text>
</View>
<TouchableOpacity  onPress={onPressStartExercise}>
    <View style={styles.start_exercise}>{'Start Exercise'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.breathing_exercises}
    data={item}
    renderItem={breathingExercisesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default BreathingExercises;

const styles = StyleSheet.create({
    "exercise_title": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "exercise_description": {
        "fontSize": 12,
        "fontWeight": "250",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "start_exercise": {
        "flex": 1,
        "padding": 10,
        "margin": 5,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white"
    }
});