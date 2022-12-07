import { useRoute } from '@react-navigation/native';
import React from 'react';
import { WebView as WebViewComponent } from 'react-native-webview';
import * as S from './styles';

export function WebView() {
  const { params } = useRoute();

  return (
    <S.Container>
      <WebViewComponent
        source={{ uri: params.url }}
      />

    </S.Container>
  );
}