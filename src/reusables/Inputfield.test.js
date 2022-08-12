/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Inputfield from "./Inputfield";

describe("Inputfiled component", () => {
  it("Inputfield renders", () => {
    const { getByTestId } = render(<Inputfield />);
    const input = getByTestId("inputField");
    expect(input).toBeTruthy();
  });

  // it("Header renders", () => {
  //   const header = queryByTestId("valueComp");
  //   expect(header).toBeTruthy();
  // });

  it("Show Password Input Field", () => {
    const { getByTestId } = render(<Inputfield type="password" />);
    const input = getByTestId("inputFieldPassword");
    expect(input).toBeTruthy();
  });

  it("Do Not Show Password Input Field", () => {
    const { queryByTestId } = render(<Inputfield />);
    const input = queryByTestId("inputFieldPassword");
    expect(input).toBeFalsy();
  });

  // it("change in Input causes change in header", async () => {
  //   await act(async () => {
  //     const { getByTestId } = render(<Inputfield />);
  //     const header = getByTestId("h1");
  //     const input = getByTestId("inputField");
  //     const value = "Hello";
  //     await fireEvent.change(input, { target: { value } });
  //     expect(header.innerHTML).toBe(value)
  //   });
  // });
});
