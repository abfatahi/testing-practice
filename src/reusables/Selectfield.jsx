import React from "react";
import styled from "styled-components";

const Selectfield = (props) => {
  return (
    <Container error={props.error} full={props.full ? props.full : undefined}>
      <div className="group">
        <select onChange={props.onValueChange} name={props.name} id={props.id}>
          <option>{props.placeholder}</option>
          {props.data.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </Container>
  );
};

export default Selectfield;

const Container = styled.div`
  position: relative;
  width: ${({ full }) => (full ? "100%" : "50%")};
  margin: 0 !important;
  padding: 0 !important;

  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: 2.5rem;

    select {
      width: 100%;
      border: ${({ error }) =>
        error ? "1px solid #E15554" : "1px solid rgba(42, 67, 75, 0.15)"};
      background: transparent;
      padding: 0 16px;
      height: 100%;
      box-sizing: border-box;
      border-radius: 4px;
      color: #2a434b;
      -webkit-appearance: none;
      appearance: none;

      :focus {
        outline: 4px solid #f6a20a0e;
        border: 1px solid #fce3b6;
      }

      :hover {
        border: 1px solid #fce3b6;
      }
    }
  }

  .group::after {
    content: "▾";
    color: #2a434b;
    font-size: 1rem;
    right: 15px;
    position: absolute;

  }
`;
