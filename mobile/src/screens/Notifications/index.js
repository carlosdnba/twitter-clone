import React from 'react';

import { Wrapper, Container, Title } from './styles';

import Header from '../../components/Header';
import NotificationsCard from '../../components/NotificationsCard';

function Notifications() {
    return (
        <Wrapper>
            <Container>
                <Header />
                <NotificationsCard />
                <NotificationsCard />
                <NotificationsCard />
                <NotificationsCard />
                <NotificationsCard />
            </Container>
        </Wrapper>
    );
}

export default Notifications;

