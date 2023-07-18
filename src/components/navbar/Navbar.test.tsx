import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("handles link click correctly and scrolls to the top", () => {
    const { container } = render(
      <Router>
        <div id="target" style={{ height: "2000px" }} />
        <Navbar />
      </Router>
    );

    // // Simulate a click on a link
    fireEvent.click(screen.getByText("Eliran"));

    // Assert that the link is active
    // expect(screen.getByText("Link Title")).tohaveclas;

    // Assert that the window scrolled to the top (Y position = 0)
    expect(window.scrollY).toBe(0);
  });

  it('should set active state to "work" after clicking the "Work" item in the navbar', () => {
    const { container } = render(
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
