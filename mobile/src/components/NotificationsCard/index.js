import React from 'react';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

import avatar from '../../images/avatar1.jpg';

import { 
    Container,
    LeftSide,
    RightSide,
    ProfilePhoto,
    TweetRow,
    Nickname,
    Action,
    TweetContent,
} from './styles';

const NotificationsCard = () => {
  return (
      <>
      <Container>
          <LeftSide>
                <FontAwesome name="retweet" size={24} color="#14b35b" />
          </LeftSide>
          <RightSide>
              <ProfilePhoto source={avatar} />
              <TweetRow>
                  <Nickname>Pedro</Nickname>
                  <Action>Retweeded your Tweet</Action>
              </TweetRow>
              <TweetContent numberOfLines={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr
              </TweetContent>
          </RightSide>
      </Container>


      <Container>
          <LeftSide>
            <AntDesign name="heart" size={18} color="#df255e" />
          </LeftSide>
          <RightSide>
              <ProfilePhoto source={avatar} />
              <TweetRow>
                  <Nickname>incerteza</Nickname>
                  <Action>Liked your Tweet</Action>
              </TweetRow>
              <TweetContent numberOfLines={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr
              </TweetContent>
          </RightSide>
      </Container>
      </>
  );
}

export default NotificationsCard;