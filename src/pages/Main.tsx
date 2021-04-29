import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
function Main() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>
        Oi! Seus arquivos das duas páginas estão na pasta ./src/pages. Você pode
        utilizar o react navigation para navegar entre as telas :)
      </Text>
      <Text>
        Hi! Your files for both pages are in the ./src/pages folder. You can use
        react navigation to navigate between screens :)
      </Text>
    </SafeAreaView>
  );
}

export default Main;
