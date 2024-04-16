import { render, screen, userEvent, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

const mockAvailableTimes = ["11:00", "11:30"];

test('Renders the Full Name input heading', () => {
    render(<BookingForm availableTimes={mockAvailableTimes}/>);
    const headingElement = screen.getByText("Full Name");
    expect(headingElement).toBeInTheDocument();
})

test('Submit button is disabled when form is invalid', () => {
    render(<BookingForm availableTimes={mockAvailableTimes}/>);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();
})

test('Submit button is enabled when form is valid', () => {
    render(<BookingForm availableTimes={mockAvailableTimes}/>);
    const nameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email');
    const dateInput = screen.getByLabelText('Select a Date');
    const guestsInput = screen.getByLabelText('Number of Guests');
    const submitButton = screen.getByRole('button');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@hello.com' } });
    fireEvent.change(dateInput, { target: { value: '2024-05-01' } });
    fireEvent.change(guestsInput, { target: { value: 5 } });

    expect(submitButton).toBeEnabled();
})