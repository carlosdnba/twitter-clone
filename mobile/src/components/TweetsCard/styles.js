import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #000;
    flex-direction: row;
    min-height: 90px;
    padding: 10px;
    align-items: center;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-bottom-width: 0.4px;
`;

export const ProfilePhoto = styled.View`
    margin-left: 5px;
`;

export const Img = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
`;

export const TweetContainer = styled.View`
    flex: 1;
    flex-direction: column;
    margin-left: 15px;
`;

export const TweetUserRow = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TweetNick = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    max-width: 140px;
`;

export const TweetUser = styled.Text`
    color: #ccc;
    font-size: 14px;
    font-weight: 100;
    margin-left: 10px;
    max-width: 90px;
`;

export const TweetDivider = styled.Text`
    color: #ccc;
    font-size: 14px;
    margin-left: 10px;
`;

export const TweetTime = styled.Text`
    color: #ccc;
    font-size: 14px;
    font-weight: 100;
    margin-left: 10px;
`;

export const TweetContent = styled.Text`
    flex: 1;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    margin-top: 5px;
`;

export const IconsRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 2px;
    margin-right: 10px;
    margin-top: 5px;
`;

export const Button = styled.TouchableOpacity``;

export const Buttons = styled.TouchableOpacity`
    margin-left: 45px;
`;

export const OptionsButton = styled.TouchableOpacity`
    align-self: flex-start;
`;
