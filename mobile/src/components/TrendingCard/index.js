import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {  
    Wrapper,
    CardContainer,
    CardRight,
    CardLeft,
    OptionsButton,
    TrendingLocation,
    TrendingTitle,
    TrendingNumbers,
} from './styles';

function TrendingCard() {
    return (
        <Wrapper>
        <CardContainer>
            <CardRight>
                <TrendingLocation>Trending in Brazil</TrendingLocation>
                <TrendingTitle>T'Challa</TrendingTitle>
                <TrendingNumbers>1.2M tweets</TrendingNumbers>
            </CardRight>
            <CardLeft>
            <OptionsButton>
                <Ionicons name="ios-arrow-down" size={16} color="#ccc" />
            </OptionsButton>
            </CardLeft>
        </CardContainer>
        </Wrapper>
    );
}

export default TrendingCard