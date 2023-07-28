import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ServiceCard from "../../components/about/ServiceCard";

describe("ServiceCard", () => {
  const service = {
    index: 0,
    title: "Sample Service",
    icon: "sample-icon.png",
  };

  it("renders service card correctly", () => {
    render(<ServiceCard {...service} />);

    // Assert title
    expect(screen.getByText(service.title)).toBeDefined();

    // Assert icon
    expect(screen.getByAltText(service.title).getAttribute("src")).toBe(
      service.icon
    );
  });
});
