/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import { BsEye, BsEyeSlashFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";

const Inputfield = (props) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Container error={props.error}>
      <div className="group">
        {props.type === "password" &&
          (togglePassword ? (
            <BsEye className="icon" onClick={() => setTogglePassword(false)} />
          ) : (
            <BsEyeSlashFill
              className="icon"
              onClick={() => setTogglePassword(true)}
            />
          ))}

        {props.type === "text" && <FaTasks className="icon" />}
        {props.type === "password" ? (
          <input
            data-testid="inputFieldPassword"
            name={props.name}
            type={!togglePassword ? "password" : "text"}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
          />
        ) : (
          <input
            data-testid="inputField"
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
            value={props.value}
            readOnly={props.readOnly}
          />
        )}
      </div>
    </Container>
  );
};

export default Inputfield;

const Container = styled.div`
  width: 100%;
  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: 2.3rem;

    .icon {
      position: absolute;
      right: 0;
      // top: 0.9em;
      // transform: translateY(70%);
      margin-right: 0.5em;
      // width: 1rem;
      cursor: pointer;
      color: grey;
      font-size: 1rem;
    }

    input {
      border: ${({ error }) =>
        error ? "1px solid #E15554" : "1px solid rgba(42, 67, 75, 0.15)"};
      border-radius: 4px;
      padding: 8px 3.5em 8px 8px;
      height: 100%;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      letter-spacing: 0.018em;
      color: #2a434b;
      width: 100%;

      :focus {
        outline: 4px solid #f6a20a0e;
        border: 1px solid #fce3b6;
      }

      :hover {
        border: 1px solid #fce3b6;
      }
    }
  }
`;
