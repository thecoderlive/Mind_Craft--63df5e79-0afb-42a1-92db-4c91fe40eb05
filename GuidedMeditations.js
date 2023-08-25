import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'



function GuidedMeditations({ item, navigation }){



function guidedMeditationsItem({ item }){
return (
<View style={styles.guided_meditations_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.session_title} numberOfLines={1}>{item.session_title}</Text>
<Text style={styles.session_duration} numberOfLines={1}>{item.session_duration}</Text>
<Text style={styles.session_instructor} numberOfLines={1}>{item.session_instructor}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.guided_meditations}
    data={item}
    renderItem={guidedMeditationsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default GuidedMeditations;

const styles = StyleSheet.create({
    "session_title": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "session_duration": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "session_instructor": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    }
});