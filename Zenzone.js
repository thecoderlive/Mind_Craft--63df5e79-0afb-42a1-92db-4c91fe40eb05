import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './zenzone_data'
import GuidedMeditations from './GuidedMeditations'
import BreathingExercises from './BreathingExercises'
import Visualizations from './Visualizations'

function Zenzone({ navigation, route }){ 
const url = (api.zenzone ?? "zenzone/") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state



async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.zenzone} showsVerticalScrollIndicator={false}>
<GuidedMeditations item={'guided_meditations' in item ? item.guided_meditations: item} navigation={navigation}/>
<BreathingExercises item={'breathing_exercises' in item ? item.breathing_exercises: item} navigation={navigation}/>
<Visualizations item={'visualizations' in item ? item.visualizations: item} navigation={navigation}/>
</ScrollView>
)}

export default Zenzone;

const styles = StyleSheet.create({
    "center": {
        "flex": 1,
        "justifyContent": "center",
        "alignItems": "center"
    }
});