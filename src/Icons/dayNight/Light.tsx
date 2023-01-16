import React from "react";
import styled from "styled-components";

export default function Light() {
  return (
    <>
      <div>LIGHT</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="red"
        viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <Circle
          cx="128"
          cy="128"
          r="60"
          fill="red"
          stroke-linecap="round"
          stroke-linejoin="round"></Circle>
        <Line
          x1="128"
          y1="36"
          x2="128"
          y2="16"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"></Line>
        <Line
          x1="62.9"
          y1="62.9"
          x2="48.8"
          y2="48.8"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"></Line>
        <Line
          x1="36"
          y1="128"
          x2="16"
          y2="128"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"></Line>
        <Line
          x1="62.9"
          y1="193.1"
          x2="48.8"
          y2="207.2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"></Line>
        <Line
          x1="128"
          y1="220"
          x2="128"
          y2="240"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"></Line>
        <Line
          x1="193.1"
          y1="193.1"
          x2="207.2"
          y2="207.2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"></Line>
        <Line
          x1="220"
          y1="128"
          x2="240"
          y2="128"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"></Line>
        <Line
          x1="193.1"
          y1="62.9"
          x2="207.2"
          y2="48.8"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"></Line>
      </svg>
    </>
  );
}

const Line = styled.line`
  stroke: ${({ theme }) => theme.buttonText};
  stroke-width: 15px;
`;

const Circle = styled.circle`
  fill: ${({ theme }) => theme.buttonText};
`;
