import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Card,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    Grid,
    Select
} from '@mui/material';
import useCheckout from '@/src/hooks/useCheckout';
import useStepper from '@/src/hooks/useStepper';
import InputTextType from './Input';
import BasicSelect from './Select';
import BoxCheckbox from './BoxCheckbox';
import {useTheme} from "@mui/material/styles"
import CustomBox from './Form/CustomBox';

const steps = ['Shipping', 'Personal Details', 'Payment', 'Confirmation'];

const INITIAL_STATE = {
    shippingMethods: 'general'
}

export default function CheckoutStepper() {

    const {
        activeStep,
        isStepOptional,
        isStepSkipped,
        handleNext,
        handleBack,
        handleSkip,
        handleReset
    } = useStepper();

    const [inputs,
        setInputs] = React.useState(INITIAL_STATE);

    const {defaultaddress, setDefaultAddress, handleShippingMethods, checked} = useCheckout({inputs, setInputs});
    return (
        <Box sx={{
            width: '100%'
        }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length
                ? (
                    <React.Fragment>
                        <Typography
                            sx={{
                            mt: 2,
                            mb: 1
                        }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            pt: 2
                        }}>
                            <Box
                                sx={{
                                flex: '1 1 auto'
                            }}/>
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                )
                : (
                    <React.Fragment>

                        {activeStep === 0 && <Card
                            style={{
                            padding: '20px',
                            margin: '20px'
                        }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={< Checkbox defaultChecked name = "defaultAddress" value = {
                                    defaultaddress
                                }
                                onChange = {
                                    () => setDefaultAddress(!defaultaddress)
                                } />}
                                    label="Use Default Address"/>
                            </FormGroup>

                            {!defaultaddress && <Grid
                                container
                                style={{
                                padding: '10px'
                            }}
                                spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputTextType
                                        name={'addressOne'}
                                        placeholder={'Address Line One'}
                                        label={'Address Line One'}></InputTextType>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputTextType
                                        name={'addressTwo'}
                                        placeholder={'Address Line Two'}
                                        label={'Address Line Two'}></InputTextType>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputTextType name={'city'} placeholder={'City'} label={'City'}></InputTextType>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputTextType name={'state'} placeholder={'State'} label={'State'}></InputTextType>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputTextType name={'zipcode'} placeholder={'Zip Code'} label={'Zip Code'}></InputTextType>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <BasicSelect
                                        label={'Country'}
                                        name={'country'}
                                        id={'addressCountry'}
                                        items={[{
                                            val: 'bd',
                                            name: 'Bangladesh'
                                        }
                                    ]}></BasicSelect>
                                </Grid>
                            </Grid>
}
                            <Grid
                                container
                                style={{
                                padding: '10px'
                            }}
                                spacing={2}>

                                {['general', 'express'].map((item, index) => (
                                    <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                                        <BoxCheckbox
                                            type={'radio'}
                                            name={'shippingMethod'}
                                            item={inputs.shippingMethods}
                                            id={item}
                                            onchange={(e) => handleShippingMethods(e)}>
                                            <CustomBox
                                                heading={'Normal Delivery'}
                                                subheading={'Estimate Arrival 7 days'}
                                                number={'$70'}
                                                checked=
                                                {checked == item ? true : false}></CustomBox>
                                        </BoxCheckbox>
                                    </Grid>
                                ))
}
                            </Grid>
                        </Card>
}

                        {activeStep === 1 && <Card
                            style={{
                            padding: '20px',
                            margin: '20px'
                        }}>
                            <Grid
                                container
                                style={{
                                padding: '10px'
                            }}
                            spacing={3}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputTextType
                                        name={'name'}
                                        placeholder={'Full Name'}
                                        label={'Full Name'}></InputTextType>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputTextType
                                        name={'email'}
                                        placeholder={'Email Address'}
                                        label={'Email Address'}></InputTextType>
                                </Grid>


                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputTextType
                                        name={'phone'}
                                        placeholder={'Phone Number'}
                                        label={'Phone Number'}></InputTextType>
                                </Grid>

                              
                            </Grid>
                        </Card>
}

                        {activeStep === 2 && 

                            <Card
                            style={{
                            padding: '20px',
                            margin: '20px'
                        }}>
                            <Grid
                                container
                                style={{
                                padding: '10px'
                            }}
                            spacing={3}>
                               

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <BoxCheckbox
                                            type={'radio'}
                                            name={'paymentMethod'}
                                            item={''}
                                            id={'cash'}
                                            >
                                            <CustomBox
                                                heading={'Cash on Delivery'}
                                                subheading={''}
                                                
                                               ></CustomBox>
                                        </BoxCheckbox>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                <BoxCheckbox
                                            type={'radio'}
                                            name={'paymentMethod'}
                                            item={''}
                                            id={'card'}
                                            >
                                            <CustomBox
                                                heading={'Payment via Credit Card'}
                                                subheading={''}
                                               ></CustomBox>
                                        </BoxCheckbox>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                <BoxCheckbox
                                            type={'radio'}
                                            name={'paymentMethod'}
                                            item={''}
                                            id={'paypal'}
                                            >
                                            <CustomBox
                                                heading={'Payment via Paypal'}
                                                subheading={''}
                                               ></CustomBox>
                                        </BoxCheckbox>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                <BoxCheckbox
                                            type={'radio'}
                                            name={'paymentMethod'}
                                            item={''}
                                            id={'bkash'}
                                            >
                                            <CustomBox
                                                heading={'Payment via Bkash'}
                                                subheading={''}
                                               ></CustomBox>
                                        </BoxCheckbox>
                                </Grid>

                              
                            </Grid>
                        </Card>

}

                        {activeStep === 3 && 
                        <Card style={{
                            padding: '20px',
                            margin: '20px'
                        }}>
                            <Typography variant='h6' style={{ textAlign : 'center' }}>Order Complete!</Typography>
                        </Card>

}

                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            pt: 2
                        }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{
                                mr: 1
                            }}>
                                Back
                            </Button>
                            <Box
                                sx={{
                                flex: '1 1 auto'
                            }}/> {isStepOptional(activeStep) && (
                                <Button
                                    color="inherit"
                                    onClick={handleSkip}
                                    sx={{
                                    mr: 1
                                }}>
                                    Skip
                                </Button>
                            )}

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
        </Box>
    );
}