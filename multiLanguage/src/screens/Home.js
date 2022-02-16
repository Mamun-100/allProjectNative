import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import About from './About';

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28,color:'red' }}>{t('common:hello')}</Text>
      <About/>
    </View>
  );
}
