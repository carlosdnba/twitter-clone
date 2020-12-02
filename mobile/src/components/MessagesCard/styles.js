import styled from 'styled-components/native';

export const Container = styled.View`
    height: 80px;
    padding: 15px;
    flex-direction: row;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-bottom-width: 0.6px;
`;

export const ProfilePhoto = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 20px;
`;

export const TweetBody = styled.View`
    margin-left: 10px;
`;

export const TweetTime = styled.Text`
    color: #ccc;
`;

export const TweetContentHeader = styled.View`
    flex-direction: row;
`;

export const Username = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Nickname = styled.Text`
    color: #ccc;
    margin-left: 5px;
`;

export const TweetContent = styled.Text`
    max-width: 260px;
    color: #ccc;
`;
