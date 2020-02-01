import React from "react";
import styled from "styled-components";
import SmallRes from "./SmallRes";

const Container = styled.div`
  padding: 4em;
  background: papayawhip;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <Container>
      <SmallRes></SmallRes>
      <SmallRes></SmallRes>
      <SmallRes></SmallRes>
      <SmallRes></SmallRes>
      <SmallRes></SmallRes>
    </Container>
  );
}
