/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("Button renders", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button-comp");
    expect(button).toBeTruthy();
  });

  it("DOM contains one(1) button component", () => {
    const { getAllByTestId } = render(<Button />);
    const buttonList = getAllByTestId("button-comp");
    expect(buttonList).toHaveLength(1);
  });
});
