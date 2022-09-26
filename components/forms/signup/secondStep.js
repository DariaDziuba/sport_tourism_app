import React, {useState} from 'react';
import {Colors} from '../../../constants/colors';
import CustomTextInput from '../CustomTextInput.js';

import {
    FormArea
} from '../../styles/forms/common.js';

const SecondStepForm = ({handleChange, handleBlur, values}) => {
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

            <CustomTextInput
                label="Confirm password"
                icon="lock"
                placeholder="* * * * * * * * "
                placeholderTextColor={Colors.grey}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
            />
        </FormArea>
    )
}

export default SecondStepForm;