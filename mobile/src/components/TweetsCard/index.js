import React from 'react';

import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';

import { 
    Container,
    ProfilePhoto,
    Img,
    TweetContainer,
    TweetUserRow,
    TweetNick,
    TweetUser,
    TweetDivider,
    TweetTime,
    TweetContent,
    IconsRow,
    Button,
    Buttons,
    OptionsButton,

} from './styles';

const TweetCard = ({
    avatar,
    nickname,
    username,
    tweetTime,
    tweetContent,
}) => {
    return (
        <Container>
            <ProfilePhoto>
                <Img source={avatar} />
            </ProfilePhoto>

            <TweetContainer>
                <TweetUserRow>
                    <TweetNick numberOfLines={1}>{ nickname }</TweetNick>
                    <TweetUser numberOfLines={1}>@{ username }</TweetUser>
                    <TweetDivider>-</TweetDivider>
                    <TweetTime>{ tweetTime }</TweetTime>
                </TweetUserRow>

                <TweetContent>{ tweetContent }</TweetContent>

                <IconsRow>
                    <Button>
                        <EvilIcons name="comment" size={24} color="#ccc" />
                    </Button>
                    <Buttons>
                        <EvilIcons name="retweet" size={26} color="#ccc" />
                    </Buttons>
                    <Buttons>
                        <AntDesign name="hearto" size={18} color="#ccc" />
                    </Buttons>
                    <Buttons>
                        <EvilIcons name="share-google" size={24} color="#ccc" />
                    </Buttons>
                </IconsRow>
            </TweetContainer>

            <OptionsButton>
                <Ionicons name="ios-arrow-down" size={16} color="#ccc" />
            </OptionsButton>
        </Container>
    );
}

export default TweetCard;