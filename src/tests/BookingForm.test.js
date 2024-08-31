import { render,screen } from "@testing-library/react"
import BookingForm from "../compnents/BookingForm";


const availableTimes = ["12:00", "13:00", "14:00"];
const handleDateChange = jest.fn();
test('Render the bookingForm heading',()=>{
    render(<BookingForm availableTimes={availableTimes} onDateChange={handleDateChange}/>);
    const headingElement = screen.getByLabelText(/Choose/);
    expect(headingElement).toBeInTheDocument();
})