import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const ReposCardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  flex-direction: row;
  width: 100%;
  align-items: center;

  margin-top: ${RFValue(10)}px;
`;

export const CardImage = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  background: #D9D9D9;
  border-radius: ${RFPercentage(50)}px;
`;

export const CardWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  align-itens: center;


  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  border-radius: ${RFValue(2)}px;

  padding: ${RFValue(12)}px 0;
`;

export const CardInfo = styled.View`
  /* align-itens: center; */
  margin-left: ${RFValue(12)}px;

  justify-content: center;
`;

export const RepoName = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.semibold};

  max-width: ${RFValue(200)}px;
`;

export const RepoLogin = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CardStar = styled.Text`
  margin-left: auto;

  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;