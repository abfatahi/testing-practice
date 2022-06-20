import React from "react";
import styled, { css } from "styled-components";
import { DotsLoadingAnimation } from "./index";

const Button = (props) => {
  return (
    <Container
      type={props.type}
      full={props.full ? props.full : undefined}
      large={props.large ? props.large : undefined}
      primary={props.primary}
      light={props.light ? props.light : undefined}
      outline={props.outline ? props.outline : undefined}
      secondary={props.secondary ? props.secondary : undefined}
      onClick={props.onClick}
      disabled={props.disabled ? true : false}
      className={props.className}
      capitalize={props.capitalize}
      indicator={props.indicator}
    >
      {props.indicator && <div className="indicator" />}
      {props.icon && <img src={props.icon} alt="Icon" />}
      {props.loading ? <DotsLoadingAnimation /> : props.text}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  position: relative;
  width: ${({ full }) => (full ? "100%" : "50%")};
  height: ${({ large }) => (large ? "60px" : "2.3rem")};
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    height: ${({ large }) => (large ? "45px" : "35px")};
  }

  img {
    width: 24px !important;
    height: 20px !important;
    opacity: 0.6;
  }

  .indicator {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    right: 15px;
    top: -10px;
    background: #e15554;
    border: 3px solid #4cc6b7;
  }

  ${(props) => css`
    ${props.primary &&
    css`
      background: #006400;
      border-radius: 5px;
      color: #fff;

      :hover {
        background: #006400 !important;
        opacity:0.7;
      }
    `}

    ${props.secondary &&
    css`
      background: #4cc6b7;
      border-radius: 5px;
      color: #fff;

      :hover {
        background: #82d7cd;
      }

      :focus {
        background: #35a698;
        outline: none;
      }

      :disabled {
        background: #c9eee9;
      }
    `}
    ${props.outline &&
    css`
      background: transparent;
      border: none;
      border-radius: 5px;
      color: #0000009a;

      :hover {
        opacity: 0.8;
      }
      :focus {
        opacity: 0.8;
      }
      :disabled {
        opacity: 0.6;
      }
    `}
    ${props.light &&
    css`
      background: #82d7cd;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      color: #fff;

      :hover {
        opacity: 0.8;
      }
      :focus {
        opacity: 0.8;
      }
      :disabled {
        opacity: 0.6;
      }
    `}
  `}

  :focus {
    outline: none;
  }

  .spinner {
    margin: 0px auto 0;
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner > .blue {
    width: 15px;
    height: 15px;
    background-color: #ffffff !important;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
