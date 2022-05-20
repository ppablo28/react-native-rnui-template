/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import './src/configuration/translations/i18next.config';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { t } = useTranslation();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>{t('title')}</Text>
    </SafeAreaView>
  );
};

export default App;
