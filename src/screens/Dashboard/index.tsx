import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';
import RepoHttpService from '../../services/GitHubApi/RepoHttpService';
import { useTheme } from 'styled-components/native';
import { ReposCard } from '../../components/ReposCard';

interface IReposProps {
  id: number;
  owner: {
    avatar_url: string;
    login: string;
  },
  name: string;
  stargazers_count: number;
  html_url: string;

}

export function Dashboard() {
  const [repos, setRepos] = useState<IReposProps[]>([]);
  const [search, setSearch] = useState('');

  const theme = useTheme();

  async function searchRepos() {
    const response = await RepoHttpService.get(search);
    setRepos(response.data);
  }

  return (
    <S.DashboardContainer>
      <S.DashboardContent>
        <S.DashboardTitle>Repositórios</S.DashboardTitle>

        <S.TextInputWrapper>
          <Ionicons name="search-outline" size={24} color={theme.colors.icon} />
          <S.Input
            placeholder="Busca por repositórios"
            value={search}
            onChangeText={setSearch}
            returnKeyType='search'
            onSubmitEditing={searchRepos}
          />
        </S.TextInputWrapper>

        {repos.map(repo => (
          <ReposCard repo={repo} />
        ))}
      </S.DashboardContent>
    </S.DashboardContainer>
  );
}