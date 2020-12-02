import React from 'react';

import { 
    Wrapper, 
    Container,
    TrendingContainer,
} from './styles';

import Header from '../../components/Header';
import News from '../../components/News';
import TrendingCard from '../../components/TrendingCard';

function Search() {
    return (
        <Wrapper>
            <Container>
                <Header />
                <News />
                <TrendingContainer>
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                </TrendingContainer>
            </Container>
        </Wrapper>
    );
}

export default Search;

