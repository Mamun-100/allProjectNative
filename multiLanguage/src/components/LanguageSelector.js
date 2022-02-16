import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'bn', label: 'বাংলা' },
];



const Selector = () => {
    const { t, i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;

    const setLanguage = (code) => {
        return i18n.changeLanguage(code);
    }

    return (
        <View>
            <View>
                <Text>
                    {t('common:languageSelector')}
                </Text>
            </View>
            {
                LANGUAGES.map((language) => {
                    const selectedLanguage = language.code === selectedLanguageCode
                    return (
                        <Pressable key={language.code}
                            disabled={selectedLanguage}
                            onPress={() => setLanguage(language.code)}
                        >
                            <Text>{language.label}</Text>
                        </Pressable>
                    )
                })
            }
        </View>
    )
}

export default Selector

const styles = StyleSheet.create({})