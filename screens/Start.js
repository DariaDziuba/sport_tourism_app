import React from 'react';

//icons
import {
    StartContainer,
    StyledButton,
    StyledButtonText,
    BottomContainer
} from '../components/styles/screens/start'

const Constants = {
    login: 'login',
    register: 'register'
}

function Start({navigation}) {
    return (
        <StartContainer source={require('./../assets/img/logo.jpg')}>
            <BottomContainer>
                <StyledButton onPress={() => navigation.navigate('Login')}>
                    <StyledButtonText>
                        Login
                    </StyledButtonText>
                </StyledButton>
                <StyledButton>
                    <StyledButtonText>
                        Sign in
                    </StyledButtonText>
                </StyledButton>
            </BottomContainer>
        </StartContainer>
    )
};

export default Start;