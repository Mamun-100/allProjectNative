import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'


const About = () => {
    const { t } = useTranslation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:25,color:'green'}}>{t('common:about')}</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})