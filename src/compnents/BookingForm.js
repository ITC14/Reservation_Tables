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
            email: Yup.string().email('Invalid email format').required('Email is required'),
            phoneNumber: Yup.string().required('Phone number is required').matches(/^\+?[0-9]{1,15}$/, 'Invalid phone number'),
            occasion: Yup.string().required('Please choose one of the options'),
            dateBooking: Yup.string().required('Please select a date'),
            timeBooking: Yup.string().required('Please select a time'),
        })

    })
    return(
        <>
        <Box>
            <VStack>
                <HStack justifyContent="center" className="bgBooking">
                <Heading as="h1" id='H1Booking'>BOOK NOW!</Heading>
                   <Image src={booking} alt='Booking' id='Booking'/> 
                </HStack>
                <VStack>
                    <Heading as="h2" size="md">{soustitre}</Heading>
                    <form  onSubmit={formik.handleSubmit}>
                        <FormControl isInvalid={formik.touched.dateBooking && !!formik.errors.dateBooking}>    
                            <FormLabel htmlFor="res-date">Choose date</FormLabel>
                            <Input type="date" id="res-date" {...formik.getFieldProps("dateBooking")} onChange={(e) => { formik.handleChange(e); onDateChange(e.target.value);}}/>
                            <FormErrorMessage>{formik.errors.dateBooking}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.timeBooking &&!!formik.errors.timeBooking}>
                           <FormLabel htmlFor="res-time">Choose time</FormLabel>
                            <select id="res-time " {...formik.getFieldProps("timeBooking")} onChange={formik.handleChange}>
                                <option value=""></option>
                                {availableTimes.map((time)=>
                                    (<option key={time} value={time}>{time}</option>))}
                            </select>
                            <FormErrorMessage>{formik.errors.timeBooking}</FormErrorMessage>
                        </FormControl>    
                            <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <Input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")}/>
                        <FormControl isInvalid={formik.touched.name && !!formik.errors.name}>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input name='name' id='name' {...formik.getFieldProps("name")}/>
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.occasion && !!formik.errors.occasion}>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <select id="occasion" name="occasion" {...formik.getFieldProps("occasion")}>
                                <option ></option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="other">Other</option>
                            </select>
                            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                        </FormControl>    
                        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input type='email' name='email' id='email' {...formik.getFieldProps("email")}/>
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>        
                        <FormControl isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}>
                            <FormLabel htmlFor='phone_number'>Phone Number</FormLabel>
                            <Input type='tel' placeholder='+1 123 456 7890' id='phone_number' name='phoneNumber' {...formik.getFieldProps("phoneNumber")}/>
                            <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                        </FormControl>    
                            <FormLabel htmlFor='instruction'>Special Instruction</FormLabel>
                            <Textarea id='instruction'  value="instruction"  placeholder='(e.g., need to be picked up at 10 am)' {...formik.getFieldProps('instruction')}/>
                            <Input type="submit" value="Make Your reservation"/>
                        </form>
                    </VStack>    
            </VStack>
        </Box>
            
        </>
    )
}
export default BookingForm;