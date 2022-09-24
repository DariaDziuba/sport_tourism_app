import {View, Image, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Colors} from '../../../constants/colors';
import styled from 'styled-components';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const MainContainer = styled.View`
    background-color: ${Colors.darkPurple};
    width: 100%;
    height: 100%;
`;

export const SubContainer = styled.View`
    width: 78%;
    height: 100%;
    background-color: ${Colors.white};
    padding-top: ${StatusBarHeight + 40}px;
    padding-bottom: ${StatusBarHeight + 40}px;
    justify-content: center;
`;

export const ContentContainer = styled.View`
    height: 100%;
    padding-right: 5px;
    padding-left: 5px;
    justify-content: center;
`;

export const MainText = styled.Text`
    color: ${Colors.darkPurple};
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;