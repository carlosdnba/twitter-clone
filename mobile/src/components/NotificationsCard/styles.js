import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    flex-direction: row;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-bottom-width: 0.4px;
`;

export const LeftSide = styled.View`
    margin-left: 20px;
    margin-top: 4px;
`;

export const RightSide = styled.View`
    margin-left: 10px;
`;

export const ProfilePhoto = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin-bottom: 5px;
`;

export const TweetRow = styled.View`
    flex-direction: row;
`;

export const Nickname = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Action = styled.Text`
    color: #fff;
    margin-top: 3px;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 100;
`;

export const TweetContent = styled.Text`
    color: #ccc;
    font-size: 14px;
    font-weight: 100;
    max-width: 280px;

`;
