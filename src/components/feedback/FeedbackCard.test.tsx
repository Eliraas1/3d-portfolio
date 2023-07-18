import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FeedbackCard from "./FeedbackCard";

describe("FeedbackCard", () => {
  const feedback = {
    testimonial: "This is a sample testimonial.",
    name: "John Doe",
    designation: "CEO",
    company: "Sellme",
    image: "sample-image.jpg",
    index: 0,
  };

  test("renders feedback card correctly", () => {
    render(<FeedbackCard {...feedback} />);

    // Assert testimonial
    expect(screen.getByText("This is a sample testimonial.")).toBeDefined();

    // Assert name, designation, and company
    expect(screen.getByText(feedback.name)).toBeDefined();
    expect(
      screen.getByText(`${feedback.designation}, ${feedback.company}`)
    ).toBeDefined();

    // Assert image
    expect(
      screen.getByAltText("feedback by " + feedback.name).getAttribute("src")
    ).toBe(feedback.image);
  });
});
