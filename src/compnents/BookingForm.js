import { Heading, VStack,Box,HStack, Image, FormControl, Input, FormLabel, FormErrorMessage,  Textarea } from '@chakra-ui/react';
import "../style/BookingForm.css"
import booking from "../image/booking.jpg"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const soustitre ="TO BOOK A RESERVATION, PLEASE FILL-OUT THIS FORM"
function BookingForm({availableTimes,onDateChange,onSubmit}){
    
    
    
    const formik= useFormik({
        initialValues: {name:"",email:"",phoneNumber:"",occasion:"",dateBooking:"",timeBooking:"",guests:1,instruction:""},
        onSubmit: (value)=>{
            const formData = {
                ...value
            };
            onSubmit(formData);// Appel à la fonction submitForm via la prop onSubmit
        },
        validationSchema : Yup.object({
            name: Yup.string().required('Name is required').min(7,"Name should be at least 7 characters long"),
            email: Yup.string().email('Invalid email format'),
            phoneNumber: Yup.string().matches(/^\+?[0-9]{1,15}$/, 'Invalid phone number'),
            occasion: Yup.string().required('Please choose one of the options'),
            dateBooking: Yup.string().required('Please select a date'),
            timeBooking: Yup.string().required('Please select a time'),
        })

    })
    return(
        <>
            <Box className='BoxBooking'>
                <VStack>
                    <HStack justifyContent="center" className="bgBooking">
                    <Heading as="h1" id='H1Booking'>BOOK NOW!</Heading>
                    <Image src={booking} alt='Booking' id='Booking'/> 
                    </HStack>
                    <VStack  align="start">
                        <Heading as="h2" size="md" id="Sous-Titre">{soustitre}</Heading>
                        <form  onSubmit={formik.handleSubmit}>
                            <FormControl isInvalid={formik.touched.dateBooking && !!formik.errors.dateBooking} className='FormControl'>    
                                <FormLabel htmlFor="res-date">Choose date <sup>*</sup></FormLabel>
                                <Input  className="customInput"type="date" id="res-date" {...formik.getFieldProps("dateBooking")} onChange={(e) => { formik.handleChange(e); onDateChange(e.target.value);}} />
                                <FormErrorMessage className='FormErrorMessage'>{formik.errors.dateBooking}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.timeBooking &&!!formik.errors.timeBooking} className='FormControl'>
                            <FormLabel htmlFor="res-time">Choose time <sup>*</sup></FormLabel>
                                <select id="res-time " {...formik.getFieldProps("timeBooking")} onChange={formik.handleChange} className="customInput">
                                    <option value=""></option>
                                    {availableTimes.map((time)=>
                                        (<option key={time} value={time}>{time}</option>))}
                                </select>
                                <FormErrorMessage className='FormErrorMessage'>{formik.errors.timeBooking}</FormErrorMessage>
                            </FormControl>
                            <FormControl className='FormControl'>  
                                <FormLabel htmlFor="guests">Number of guests <sup>*</sup></FormLabel>
                                <Input type="number" placeholder="1" min="1"  id="guests" {...formik.getFieldProps("guests")} />
                            </FormControl>   
                            <FormControl isInvalid={formik.touched.name && !!formik.errors.name} className='FormControl'>
                                <FormLabel htmlFor='name'>Name <sup>*</sup></FormLabel>
                                <Input name='name' id='name' {...formik.getFieldProps("name")}className="customInput"/>
                                <FormErrorMessage className='FormErrorMessage'>{formik.errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.occasion && !!formik.errors.occasion} className='FormControl'>
                                <FormLabel htmlFor="occasion">Occasion <sup>*</sup></FormLabel>
                                <select id="occasion" name="occasion" {...formik.getFieldProps("occasion")} className="customInput">
                                    <option ></option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="other">Other</option>
                                </select>
                                <FormErrorMessage className='FormErrorMessage'>{formik.errors.occasion}</FormErrorMessage>
                            </FormControl>    
                            <FormControl isInvalid={formik.touched.email && formik.errors.email} className='FormControl'>
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <Input type='email' name='email' id='email' {...formik.getFieldProps("email")}  className="customInput"/>
                                <FormErrorMessage className='FormErrorMessage'>{formik.errors.email}</FormErrorMessage>
                            </FormControl>        
                            <FormControl isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber} className='FormControl'>
                                <FormLabel htmlFor='phone_number'>Phone Number</FormLabel>
                                <Input type='tel' placeholder='+1 123 456 7890' id='phone_number' name='phoneNumber' {...formik.getFieldProps("phoneNumber")} className="customInput"/>
                                <FormErrorMessage className='FormErrorMessage'>{formik.errors.phoneNumber}</FormErrorMessage>
                            </FormControl>
                            <FormControl className='FormControl'>
                                <FormLabel htmlFor='instruction'>Special Instruction</FormLabel>
                                <Textarea id='instruction'  value="instruction"  placeholder='(e.g., need to be picked up at 10 am)' {...formik.getFieldProps('instruction')} className="customInput"/>
                            </FormControl>   
                                <Input type="submit" value="RESERVE" className="customInput"/>
                            </form>
                        </VStack>    
                </VStack>
            </Box>
        </>
    )
}
export default BookingForm;