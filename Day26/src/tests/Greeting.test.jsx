import { render, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";
import { describe, it, expect } from "vitest";

describe("Greeting", () => {
    it("renders a default greeting", () => {
        render(<Greeting/>);
        expect(screen.getByText("Hello World!")).toBeInTheDocument();
    });
    it("renders a name in greeting", () => {
        render(<Greeting user={"Ravi"} />);
        expect(screen.getByText("Hello Ravi!")).toBeInTheDocument();
    });
});