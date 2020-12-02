import React from 'react';

import avatar from '../../images/avatar1.jpg';

import { 
    Container,
    ProfilePhoto,
    TweetBody,
    TweetTime,
    TweetContentHeader,
    Username,
    Nickname,
    TweetContent,
} from './styles';

const MessagesCard = () => {
  return (
    <Container>
        <ProfilePhoto source={avatar} />
        <TweetBody>
            <TweetContentHeader>
                <Username>Pedro</Username>
                <Nickname>@Pehmsilva</Nickname>
            </TweetContentHeader>
            <TweetContent numberOfLines={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et 
                e magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in repr
            </TweetContent>
        </TweetBody>
        <TweetTime>
            11h
        </TweetTime>
    </Container>
  );
}

export default MessagesCard;