import React from 'react';

import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';

import { Container, Wrapper, Button ,} from './styles';

function Header() {
    return(
        <Wrapper>
        <Container>
            <Button>
                <FontAwesome5 name="bars" size={24} color="#1da1f2" />
            </Button>
            <Button>
                <AntDesign name="twitter" size={24} color="#1da1f2" />
            </Button>
            <Button>
                <Ionicons name="ios-star-outline" size={24} color="#1da1f2" />
            </Button>
        </Container>
        </Wrapper>
    );
}

export default Header;
