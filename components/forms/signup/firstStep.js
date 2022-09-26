import React, {useState} from 'react';
import {Colors} from '../../../constants/colors';
import Calendar from '../../modals/calendar.js';
import CustomTextInput from '../CustomTextInput.js';

import {
    FormArea
} from '../../styles/forms/common.js';

const FirstStepForm = ({handleChange, handleBlur, values}) => {
    const [visible, setVisible] = useState(false);
    const [birthDate, setBirthDate] = useState(values.birthDate);

    const showModal = () => {
        console.log('show');
        setVisible(true);
    }

    const setBirthDateValue = (value) => {
        setBirthDate(value);
        values.birthDate = value;
    }

    return (
        <FormArea>
            <Calendar visible={visible} hideModal={() => setVisible(false)} setValue={setBirthDateValue}/>

            <CustomTextInput
                label="First Name"
                icon="person"
                placeholder="Daria"
                placeholderTextColor={Colors.grey}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
            />

            <CustomTextInput
                label="Last Name"
                icon="person-fill"
                placeholder="Dziuba"
                placeholderTextColor={Colors.grey}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
            />

            <CustomTextInput
                label="Birth Date"
                icon="calendar"
                placeholder="DD-MM-YYYY"
                placeholderTextColor={Colors.grey}
                onChangeText={handleChange('birthDate')}
                onBlur={handleBlur('birthDate')}
                value={birthDate}
                isDate={true}
                editable={false}
                showModal={showModal}
            />

            <CustomTextInput
                label="Club name"
                icon="people"
                placeholder="Merydian"
                placeholderTextColor={Colors.grey}
                onChangeText={handleChange('clubName')}
                onBlur={handleBlur('clubName')}
                value={values.clubName}
            />
        </FormArea>
    )
}

export default FirstStepForm;