import React from 'react';

import { Wrapper, Container, Title } from './styles';

import Header from '../../components/Header';
import TweetsCard from '../../components/TweetsCard';

import { data } from './data';

function Home() {
    return (
        <Wrapper>
            <Container>
                <Header />
                {data.map((item) => (
                    <TweetsCard 
                        key={item.id}
                        avatar={item.avatar}
                        nickname={item.nickname}
                        username={item.username}
                        tweetTime={item.tweetTime}
                        tweetContent={item.tweetContent}
                    />
                ))}
                {data.map((item) => (
                    <TweetsCard 
                        key={item.id}
                        avatar={item.avatar}
                        nickname={item.nickname}
                        username={item.username}
                        tweetTime={item.tweetTime}
                        tweetContent={item.tweetContent}
                    />
                ))}
                {data.map((item) => (
                    <TweetsCard 
                        key={item.id}
                        avatar={item.avatar}
                        nickname={item.nickname}
                        username={item.username}
                        tweetTime={item.tweetTime}
                        tweetContent={item.tweetContent}
                    />
                ))}
                {data.map((item) => (
                    <TweetsCard 
                        key={item.id}
                        avatar={item.avatar}
                        nickname={item.nickname}
                        username={item.username}
                        tweetTime={item.tweetTime}
                        tweetContent={item.tweetContent}
                    />
                ))}
                {data.map((item) => (
                    <TweetsCard 
                        key={item.id}
                        avatar={item.avatar}
                        nickname={item.nickname}
                        username={item.username}
                        tweetTime={item.tweetTime}
                        tweetContent={item.tweetContent}
                    />
                ))}
                {data.map((item) => (
                    <TweetsCard 
                        key={item.id}
                        avatar={item.avatar}
                        nickname={item.nickname}
                        username={item.username}
                        tweetTime={item.tweetTime}
                        tweetContent={item.tweetContent}
                    />
                ))}
            </Container>
        </Wrapper>
    );
}

export default Home;

