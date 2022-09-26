import {View, Image, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Colors} from '../../../constants/colors';
import styled from 'styled-components';

export const StartContainer = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`;

export const BottomContainer = styled.View`
    background-color: ${Colors.white};
    width: 100%;
    height: 30%;
    padding: 10px;
    justify-content: center;
    ${'' /* opacity: 0.7; */}
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 5px;
    background-color: ${Colors.darkPurple};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 10px;
    height: 60px;
    opacity: 1;
    ${(props) => props.color && `
        background-color: ${props.color};
    `};
`;

export const StyledButtonText = styled.Text`
    text-align: center;
    color: ${Colors.white};
    font-weight: bold;
    font-size: 17px;
`;
