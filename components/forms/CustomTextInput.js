import React from 'react';
import {View} from 'react-native';
import {Colors} from './../../constants/colors';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';

import {
    LeftIcon,
    CustomInputLabel,
    StyledTextInput,
    RightIcon
} from './../styles/forms/common.js';

const CustomTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showModal, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.darkPurple} />
            </LeftIcon>
            <CustomInputLabel>{label}</CustomInputLabel>
            <StyledTextInput {...props} onPressIn={isDate && showModal}/>
            { isPassword && getPasswordEyeIcon(setHidePassword, hidePassword)}
        </View>
    )
}

function getPasswordEyeIcon(setHidePassword, hidePassword) {
    return (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons
                name={hidePassword ? 'md-eye-off' : 'md-eye'}
                size={30}
                color={Colors.grey}
            />
        </RightIcon>
    );
}

export default CustomTextInput;