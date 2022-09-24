import React from 'react';

import LoginForm from './../components/forms/login';
import {
    MainContainer,
    SubContainer,
    MainText,
    ContentContainer
} from '../components/styles/screens/login.js';

const Login = () => {
    return (
        <MainContainer>
            <SubContainer>
                <ContentContainer>
                    <MainText>Account Login</MainText>
                    <LoginForm />
                </ContentContainer>
            </SubContainer>
        </MainContainer>
    );
};

export default Login;