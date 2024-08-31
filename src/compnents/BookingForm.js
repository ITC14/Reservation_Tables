import { Heading, VStack,Box,HStack, Image } from '@chakra-ui/react';
import { useState } from 'react';
import "../style/BookingForm.css"
import booking from "../image/booking.jpg"

const soustitre ="TO BOOK A RESERVATION, PLEASE FILL-OUT THIS FORM"
function BookingForm({availableTimes,onDateChange,onSubmit}){
    const [dateBooking, setDateBooking] =useState("");
    const [guests, setGuests] =useState();
    const [occasion, setOccasion] = useState();
    const [timeBooking, setTimeBooking] = useState("");
    
    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDateBooking(newDate);
        onDateChange(newDate); 
      };
    function handleOnSubmit(e){
        e.preventDefault();
        //Creation form data in a object
        const formData = {
            dateBooking,
            timeBooking,
            guests,
            occasion
        };
       onSubmit(formData); // Appel à la fonction submitForm via la prop onSubmit
        

    }

    return(
        <>
        <Box>
            <VStack>
                <HStack justifyContent="center" className="bgBooking">
                <Heading as="h1" id='H1Booking'>BOOK NOW!</Heading>
                   <Image src={booking} alt='Booking' id='Booking'/> 
                </HStack>
                <form  onSubmit={handleOnSubmit}>
                    <Heading as="h2" size="md">{soustitre}</Heading>
                        
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" value={dateBooking} onChange={handleDateChange}/>
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time " value={timeBooking} onChange={e=>{setTimeBooking(e.target.value)}}>
                            <option value=""></option>
                            {availableTimes.map((time)=>
                                (<option key={time} value={time}>{time}</option>))}
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>{setGuests(e.target.value)}}/>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' />
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={occasion} onChange={e=>{setOccasion(e.target.value)}}>
                            <option ></option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Other</option>
                        </select>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='name@example.com' id='email'/>
                        <label htmlFor='number'>Phone Number</label>
                        <input type='tel' placeholder='+1 123 456 7890' id='number'/>
                        <label htmlFor='instruction'>Special Instruction</label>
                        <textarea id='instruction' placeholder='(e.g., need to be picked up at 10 am)'/>
                        <input type="submit" value="Make Your reservation"/>
                    </form>
            </VStack>
        </Box>
            
        </>
    )
}
export default BookingForm;