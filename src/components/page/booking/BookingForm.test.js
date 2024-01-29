import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('Booking form tests', () => {
    const availableTimes = ["17:30", "19:15", "19:30", "20:00", "22:00"];
    test('Renders the BookingForm heading', () => {
        render(<BookingForm availableTimes={availableTimes}/>);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    });

    test('Render form fields', () => {
        render(
          <BookingForm availableTimes={availableTimes} />
        );

        const date = screen.getByLabelText(/Choose date/);
        const time = screen.getByLabelText(/Choose time/);
        const nbGuests = screen.getByLabelText(/Number of guests/);
        const occasion = screen.getByLabelText(/Occasion/);
        const submitBtn = screen.getByRole('button');

        expect(date).toBeInTheDocument();
        expect(date).toHaveAttribute('type', 'date');
        expect(time).toBeInTheDocument();
        expect(nbGuests).toBeInTheDocument();
        expect(nbGuests).toHaveAttribute('type', 'number');
        expect(nbGuests).toHaveValue(2);
        expect(occasion).toBeInTheDocument();
        expect(occasion).toHaveValue('Birthday');
        expect(submitBtn).toBeInTheDocument();
        expect(submitBtn).toHaveAttribute('type', 'submit');
        expect(submitBtn).toBeEnabled();
      });
    
      
});