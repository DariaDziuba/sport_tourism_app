import React, {useState} from 'react';
import {Modal} from 'react-native';
import {Colors} from './../../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';

//icons
import {Octicons} from '@expo/vector-icons';

import {
    ModalBackground,
    ModalContainer,
    RightIcon,
    ButtonText,
    SubmitButton
} from '../styles/modals/calendar.js'

const Calendar = ({visible, hideModal, setValue}) => {
    const [currentValue, setCurrentValue] = useState(new Date());
    const submit = () => {
        setValue(currentValue.toDateString());
        hideModal();
    };

    const onChange = (event, selectedDate) => {
        setCurrentValue(selectedDate);
    };

    return (
        <Modal transparent visible={visible}>
            <ModalBackground>
                <ModalContainer>
                    <RightIcon onPress={hideModal}>
                        <Octicons name={'x'} size={30} color={Colors.darkPurple} />
                    </RightIcon>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={currentValue}
                        mode='date'
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                    />
                    <SubmitButton onPress={submit}>
                        <ButtonText>Save</ButtonText>
                    </SubmitButton>
                </ModalContainer>
            </ModalBackground>
        </Modal>
    );
}

export default Calendar;