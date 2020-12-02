import React from 'react';

import background from '../../images/news-background.png';

import { 
    Container,
    NewsContainer,
    NewsRow,
    NewsInfoTitle,
    NewsInfo,
    NewsContent,
    Divider,
} from './styles';

function Header() {
    return(
        <Container>
            <NewsContainer source={background}>
                <NewsRow>
                    <NewsInfoTitle>News</NewsInfoTitle>
                    <NewsInfo>-</NewsInfo>
                    <NewsInfo>55 minutes ago</NewsInfo>
                </NewsRow>
                <NewsContent numberOfLines={2}>
                    Covid-19: Butantan prevê entrega de 45 milhões de doses de vacina contra a doença
                </NewsContent>
            </NewsContainer>
            <Divider />
        </Container>
    );
}

export default Header;
