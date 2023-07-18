import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectCard from "./ProjectCard";
import { nodejs, reactNative } from "../../assets";

describe("ProjectCard", () => {
  const project = {
    name: "Sample Project",
    description: "This is a sample project",
    tags: [
      { name: "react native", color: "red", icon: reactNative },
      { name: "node js", color: "blue", icon: nodejs },
    ],
    image: "sample-image.jpg",
    source_code_link: "https://github.com/sample-project",
    demo: "https://youtube.com/sample-video",
    store: "https://play.google.com/sample-app",
    index: 0,
  };
  let spy;
  beforeEach(() => {
    spy = vi.spyOn(window, "open");
  });

  afterAll(() => {
    vi.resetAllMocks();
  });

  it("renders project card correctly", () => {
    render(<ProjectCard {...project} />);

    // Assert project name and description
    expect(screen.getByText("Sample Project")).toBeDefined();
    expect(screen.getByText("This is a sample project")).toBeDefined();

    // Assert tags
    project.tags.forEach((tag) =>
      expect(screen.getByAltText(tag.name).getAttribute("src")).toBe(tag.icon)
    );

    // Assert image
    expect(
      screen.getByAltText("project " + project.name).getAttribute("src")
    ).toBe(project.image);
  });

  it("opens source code link in new window when clicked", () => {
    render(<ProjectCard {...project} />);

    const sourceCodeLink = screen.getByAltText("github");
    fireEvent.click(sourceCodeLink);
    expect(window.open).toHaveBeenCalledWith(
      "https://github.com/sample-project",
      "black"
    );
  });

  it("opens store link in new window when clicked", () => {
    render(<ProjectCard {...project} />);

    const storeLink = screen.getByAltText("google play");

    fireEvent.click(storeLink);

    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      "https://play.google.com/sample-app",
      "black"
    );
  });

  it("opens demo link in new window when clicked", () => {
    render(<ProjectCard {...project} />);

    const demoLink = screen.getByAltText("youtube");

    fireEvent.click(demoLink);

    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      "https://youtube.com/sample-video",
      "black"
    );
  });
});
