import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const NewsContainer = styled.ImageBackground`
    height: 240px;
    padding: 20px;
    justify-content: flex-end;
`;

export const NewsRow = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
`;

export const NewsInfoTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

export const NewsInfo = styled.Text`
    color: #fff;
    margin-left: 5px;
    font-weight: 100;
`;

export const NewsContent = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 21px;

`;

export const Divider = styled.View`
    flex: 1;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 2px;
`;