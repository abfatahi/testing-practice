import React from "react";
import styled from "styled-components";

const DotsLoadingAnimation = () => {
  return (
    <Container className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </Container>
  );
};

export default DotsLoadingAnimation;

const Container = styled.div``;
