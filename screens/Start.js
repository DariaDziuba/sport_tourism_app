import React from 'react';
import { Colors } from '../constants/colors';

//icons
import {
    StartContainer,
    StyledButton,
    StyledButtonText,
    BottomContainer
} from '../components/styles/screens/start'

function Start({navigation}) {
    return (
        <StartContainer source={require('./../assets/img/logo.jpg')}>
            <BottomContainer>
                <StyledButton onPress={() => navigation.navigate('Login')}>
                    <StyledButtonText>
                        Login
                    </StyledButtonText>
                </StyledButton>
                <StyledButton color={Colors.violet} onPress={() => navigation.navigate('Signup')}>
                    <StyledButtonText>
                        Sign up
                    </StyledButtonText>
                </StyledButton>
            </BottomContainer>
        </StartContainer>
    )
};

export default Start;