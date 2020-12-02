import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity``;

export const CardContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    height: 80px;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-bottom-width: 0.4px;
`;

export const CardRight = styled.View``;

export const CardLeft = styled.View`
    align-self: flex-start;
`;

export const OptionsButton = styled.TouchableOpacity``;

export const TrendingLocation = styled.Text`
    color: #ccc;
    font-weight: 100;
    font-size: 12px;
`;

export const TrendingTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin: 1px 0;
`;

export const TrendingNumbers = styled.Text`
    color: #ccc;
    font-weight: 100;
    font-size: 12px;
`;
