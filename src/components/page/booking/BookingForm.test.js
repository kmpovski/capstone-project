import { render, screen, fireEvent, act, waitFor, queryByTestId } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('Booking form tests', () => {
    const availableTimes = ["17:30", "19:15", "19:30", "20:00", "22:00"];
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    test('Renders the BookingForm heading', () => {
        render(<BookingForm availableTimes={availableTimes}/>);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    });

    test('Render form fields', () => {
        
        render(
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        );

        const date = screen.getByLabelText(/Choose date/);
        const time = screen.getByLabelText(/Choose time/);
        const nbGuests = screen.getByLabelText(/Number of guests/);
        const occasion = screen.getByLabelText(/Occasion/);
        const submitBtn = screen.getByRole('button');

        expect(date).toBeInTheDocument();
        expect(time).toBeInTheDocument();
        expect(nbGuests).toBeInTheDocument();
        expect(occasion).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
        expect(submitBtn).toBeEnabled();
    });


    test('Test form fields validation OK', async () => {

        render(
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        );

        const date = screen.getByLabelText(/Choose date/);
        const submitBtn = screen.getByRole('button');

        await act(async() => {
            fireEvent.change(date, { target: { value: new Date() } });
            fireEvent.click(submitBtn);
            await waitFor(() => {
                expect(screen.queryByTestId('dateError')).not.toBeInTheDocument();
              });
          });
    });
});