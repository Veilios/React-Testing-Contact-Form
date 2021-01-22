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
    const submitButton = screen.getByRole('button');

    userEvent.type(firstName, "Al");
    userEvent.type(lastName, "Gertrude");
    userEvent.type(email, "idk@wat.com");
    userEvent.type(message, "I don't remember where I parked my car");

    expect(firstName).toHaveValue('Al');
    // expect(firstName).toHaveValue('Slim');
    expect(lastName).toHaveValue('Gertrude');
    // expect(lastName).toHaveValue('Shady');
    expect(email).toHaveValue('idk@wat.com');
    // expect(email).toHaveValue("eminem@rap.com");
    expect(message).toHaveValue("I don't remember where I parked my car");
    // expect(message).toHaveValue("My name is what? My name is who?");
});