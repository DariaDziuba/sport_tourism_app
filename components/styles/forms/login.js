import {View, Image, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Colors} from './../../../constants/colors';
import styled from 'styled-components';

export const FormArea = styled.View`
    margin-top: 10px;
    padding: 5px;
    width: 100%;
`;

export const LeftIcon = styled.View`
    left: 13px;
    top: 34px;
    position: absolute;
    z-index: 1;
`;

export const CustomInputLabel = styled.Text`
    color: ${Colors.lightPurple};
    font-size: 13px;
    text-align: left;
    font-weight: bold;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${Colors.lightGrey};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size:16px;height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${Colors.lightBlack};
`;

export const RightIcon = styled.TouchableOpacity`
    right: 13px;
    top: 34px;
    position: absolute;
    z-index: 1;
`;

export const FormSubmitButton = styled.TouchableOpacity`
    padding: 5px;
    background-color: ${Colors.darkPurple};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${Colors.green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${Colors.white};
    font-size: 18px;
    font-weight: bold;

    ${(props) => props.google == true && `
        padding: 25px;
    `};
`;