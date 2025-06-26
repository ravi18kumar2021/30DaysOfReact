import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContactForm from "../components/ContactForm";

describe("ContactForm", () => {
    it("renders input fields and button", () => {
        render(<ContactForm />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument();
    });
    it("shows alert when form is submitted with empty input fields", () => {
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
        render(<ContactForm />);
        fireEvent.click(screen.getByRole('button', {name: /submit/i}));
        expect(alertMock).toHaveBeenCalledWith('Please fill out the form');
        alertMock.mockRestore();
    });
    it("displays error message for invalid email", () => {
        render(<ContactForm />);
        fireEvent.change(screen.getByLabelText(/name/i), {
            target: {value: 'Ravi'}
        });
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: {value: 'invalid-email'}
        });
        fireEvent.click(screen.getByRole('button', {name: /submit/i}));
        expect(screen.getByTestId('error-message')).toBeInTheDocument();
    });
    it("displays success message on valid submit", () => {
        render(<ContactForm />);
        fireEvent.change(screen.getByLabelText(/name/i), {
            target: {value: 'Ravi'}
        });
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: {value: 'programmer.ravi@gmail.com'}
        });
        fireEvent.click(screen.getByRole('button', {name: /submit/i}));
        expect(screen.getByTestId('success-message')).toBeInTheDocument();
    });
})