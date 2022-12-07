import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const DashboardContainer = styled.SafeAreaView`
  flex:1;
`;

export const DashboardContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(16),
  },
  showsVerticalScrollIndicator: false
})``;

export const DashboardTitle = styled.Text`
  font-size: 34px;
  font-weight: 700;
`;

export const TextInputWrapper = styled.View`
  background: rgba(118, 118, 128, 0.12);
  border-radius: ${RFValue(10)}px;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(8)}px;

  margin: ${RFValue(16)}px 0;
`;

export const Input = styled.TextInput`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(17)}px;
  margin-left: ${RFValue(6)}px;
`;

export const ReposCard = styled.TouchableOpacity.attrs({
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