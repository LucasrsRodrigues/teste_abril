import { useNavigation } from '@react-navigation/native';
import React from 'react';

import * as S from './styles';

interface IReposCardProps {
  repo: {
    id: number;
    owner: {
      avatar_url: string;
      login: string;
    },
    name: string;
    stargazers_count: number;
    html_url: string;
  }
}

export function ReposCard({ repo }: IReposCardProps) {
  const { navigate } = useNavigation();


  return (
    <S.ReposCardContainer onPress={() => navigate('WebView', {
      url: repo.html_url,
      title: repo.name
    })}>
      <S.CardImage source={{ uri: repo.owner.avatar_url }} />
      <S.CardWrapper>
        <S.CardInfo>
          <S.RepoName>{repo.name}</S.RepoName>
          <S.RepoLogin>{repo.owner.login}</S.RepoLogin>
        </S.CardInfo>
        <S.CardStar>
          {repo.stargazers_count} stars
        </S.CardStar>
      </S.CardWrapper>
    </S.ReposCardContainer>
  );
}