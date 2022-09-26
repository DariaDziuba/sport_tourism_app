import {View, Image, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Colors} from './../../../constants/colors';
import styled from 'styled-components';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const MainContainer = styled.View`
    background-color: ${Colors.darkPurple};
    width: 100%;
    height: 100%;
    justify-content: right;
    align-items: flex-end;
`;

export const SubContainer = styled.View`
    width: 78%;
    height: 100%;
    background-color: ${Colors.white};
    padding-top: ${StatusBarHeight}px;
    padding-bottom: ${StatusBarHeight + 40}px;
`;

export const ContentContainer = styled.View`
    height: 100%;
    padding-right: 5px;
    padding-left: 5px;
    justify-content: flex-start;
`;

export const MainText = styled.Text`
    color: ${Colors.darkPurple};
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;

export const SubText = styled.Text`
    color: ${Colors.lightPurple};
    text-align: center;
    font-size: 17px;
    font-weight: bold;
`;

export const TextContainer = styled.View`
    justify-content: center;
`;

export const LinkedText = styled.Text`
    color: ${Colors.lightPurple};
    text-align: center;
    font-size: 17px;
    text-decoration-line: underline;
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
