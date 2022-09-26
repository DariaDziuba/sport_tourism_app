import React, {useState} from 'react';
import {View, Keyboard} from 'react-native';

import FirstStepForm from './../components/forms/signup/firstStep';
import SecondStepForm from './../components/forms/signup/secondStep';

//formik
import {Formik} from 'formik';

import {
    MainContainer,
    SubContainer,
    ContentContainer,
    MainText,
    SubText,
    LinkedText,
    TextContainer,
    FormSubmitButton,
    ButtonText
} from './../components/styles/screens/signup';

const steps = {
    first: 1,
    second: 2
};

const formValues = {
    firstName: '',
    lastName: '',
    birthDate: '',
    clubName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const Signup = ({navigation}) => {
    const [currentStep, setCurrentStep] = useState(steps.first);

    const goToStep = (step) => {
        Keyboard.dismiss();
        setCurrentStep(step);
    }

    return (
        <MainContainer>
            <SubContainer>
                <ContentContainer>
                    <MainText>Create Account</MainText>
                    <SubText>step {currentStep}</SubText>
                    <Formik
                        initialValues={formValues}
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {
                            ({handleChange, handleBlur, handleSubmit, values}) =>
                                getForm(handleChange, handleBlur, handleSubmit, values, currentStep, goToStep)
                        }
                    </Formik>
                </ContentContainer>
            </SubContainer>
        </MainContainer>
    );
};

function getForm(handleChange, handleBlur, handleSubmit, values, currentStep, goToStep) {
    return (
        <View>
            <View style={{display: currentStep === steps.first ? '' : 'none'}}>
                <FirstStepForm
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                />
                <FormSubmitButton onPress={goToStep.bind(this, currentStep + 1)}>
                    <ButtonText>Next Step</ButtonText>
                </FormSubmitButton>
            </View>
            <View style={{display: currentStep === steps.second ? '' : 'none'}}>
                <SecondStepForm
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                    values={values}
                />

                <FormSubmitButton onPress={handleSubmit}>
                    <ButtonText>Sign up</ButtonText>
                </FormSubmitButton>
                <TextContainer>
                    <LinkedText onPress={goToStep.bind(this, currentStep - 1)}>
                        previous step
                    </LinkedText>
                </TextContainer>

            </View>
        </View>
    )
}

export default Signup;