import { DatePicker, TimePicker } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { Button, Inputfield } from "../reusables";
const Card = () => {
  return (
    <Container>
      <div className="header">
        <h4>
          TASKS <span>0</span>
        </h4>
        <FaPlus className="icon" />
      </div>
      <div className="body">
        <h5>Task Description</h5>
        <Inputfield type="text" />
        <div className="col_group">
          <div className="date">
            <h5>Date</h5>
            <DatePicker style={{ width: "100%" }} />
          </div>
          <div className="time">
            <h5>Time</h5>
            <TimePicker use12Hours format="h:mm a" style={{ width: "100%" }} />
          </div>
        </div>
        <h5>Assign User</h5>
        <Inputfield value="Ishaq Abdulfatahi" />
        <div className="btn_group">
          <Button text="Cancel" outline />
          <Button text="Save" primary />
        </div>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 375px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    background: transparent;
    border-bottom: 1px solid #bdbdbd;

    h4 {
      font-size: 1rem;
      font-weight: normal;

      span {
        font-weight: bold;
        color: #0000009a;
      }
    }

    .icon {
      font-size: 1rem;
      cursor: pointer;
      font-weight: normal;

      :hover {
        transform: scale(1.1);
      }
    }
  }

  .body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0 0 5px 5px;
    min-height: 200px;
    background: #eff8fc;
    text-align: left;

    h5 {
      font-size: 0.9rem;
      font-weight: normal;
    }

    .btn_group {
      display: flex;
      margin-top:0.9rem;
      gap: 0.5rem;
      width: 50%;
      margin-left: auto;
    }

    .col_group {
      display: flex;
      width: 100%;
      gap: 0.75rem;

      .date,
      .time {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        width: 100%;
      }
    }
  }
`;
