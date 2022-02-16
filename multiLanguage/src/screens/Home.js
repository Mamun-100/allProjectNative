import { View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('common:hello')}</Text>
    </View>
  );
}



