import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navbar from "../../components/navbar/Navbar";

describe("Navbar Component", () => {
  it('should set active state to "work" after clicking the "Work" item in the navbar', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Find the "Work" link in the navbar
    const workLink = screen.getAllByText("Work")[0];
    const differentLink = screen.getAllByText("About")[0];
    const differentParentElement = differentLink.parentElement;
    const parentElement = workLink.parentElement;

    // Simulate a click on the "Work" link
    fireEvent.click(workLink);

    // Verify that the active state is set to "work"
    const isLinkActive = !parentElement?.className.includes("text-secondary");
    const isAboutLinkInActive =
      differentParentElement?.className.includes("text-secondary");
    expect(isLinkActive).toBe(true);
    expect(isAboutLinkInActive).toBe(true);
  });
});
