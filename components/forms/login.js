import React, {useState} from 'react';
import {Colors} from './../../constants/colors';
import CustomTextInput from './CustomTextInput.js';

//formik
import {Formik} from 'formik';

import {
    FormArea,
    FormSubmitButton,
    ButtonText
} from './../styles/forms/common.js';

const LoginForm = () => {
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => submitForm(values)}
        >
            {
                ({handleChange, handleBlur, handleSubmit, values}) => getForm(handleChange, handleBlur, handleSubmit, values)
            }
        </Formik>
    );
}

function getForm(handleChange, handleBlur, handleSubmit, values) {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <FormArea>
            <CustomTextInput
                label="Email Address"
                icon="mail"
                placeholder="test@test.com"
                placeholderTextColor={Colors.grey}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
            />

            <CustomTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * * "
                placeholderTextColor={Colors.grey}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
            />

            <FormSubmitButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
            </FormSubmitButton>

            {/* <FormSubmitButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={Colors.white}  size={25} />
                <ButtonText google={true}>Sign in with Google</ButtonText>
            </FormSubmitButton> */}
        </FormArea>
    )
}

function submitForm(values) {
    console.log(values);
}

export default LoginForm;