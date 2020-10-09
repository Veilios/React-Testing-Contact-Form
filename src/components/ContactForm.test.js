import React from 'react';
import { getByLabelText, render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('Renders ContactForm without crashing', () => {
    render(<ContactForm />) 
});

test('User can fill out all inputs', async () => {
    render(<ContactForm />);


    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {target: {value: "Alan"}});
    fireEvent.change(lastNameInput, {target: {value: "Mir"}});
    fireEvent.change(emailInput, {target: {value: "alanpaulphotos@gmail.com"}});
    fireEvent.change(messageInput, {target: {value: "I like long walks on the beach"}});

    expect(firstNameInput).toHaveValue("Alan");
    expect(lastNameInput).toHaveValue("Mir");
    expect(emailInput).toHaveValue("alanpaulphotos@gmail.com");
    expect(messageInput).toHaveValue("I like long walks on the beach");

    expect(firstNameInput).toBeTruthy();

    const button = screen.getByRole('button', {name: /submit/i});
    fireEvent.click(button);
    
})