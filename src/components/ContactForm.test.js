import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
});

test("recieves inputs, and submits", () => {
    render(<ContactForm />);

    const firstName = screen.getByPlaceholderText(/edd/i);
    const lastName = screen.getByPlaceholderText(/burke/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByRole('textbox');

    userEvent.type(firstName, "Al");
    userEvent.type(lastName, "Gertrude");
    userEvent.type(email, "idk@wat.com");
    userEvent.type(message, "I don't remember where I parked my car");
});