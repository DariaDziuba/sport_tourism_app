import {View, Image, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Colors} from './../../../constants/colors';
import styled from 'styled-components';

export const ModalBackground = styled.View`
    flex: 1;
    background-color: 'rgba(0,0,0,0.5)';
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.View`
    width: 80%;
    background-color: ${Colors.white};
    padding-horizontal: 20px;
    padding-vertical: 20px;
    border-radius: 20px;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 10px;
    position: absolute;
    z-index: 1;
`;

export const SubmitButton = styled.TouchableOpacity`
    padding: 5px;
    background-color: ${Colors.darkPurple};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${Colors.white};
    font-size: 18px;
    font-weight: bold;
`;