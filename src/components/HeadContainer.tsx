import React from "react";
import styled from "styled-components";
import Dark from "../Icons/dayNight/Dark";
import Light from "../Icons/dayNight/Light";
import { device } from "../deviceSizes/deviceSizes";

interface Props {
  isDay: boolean;
  setIsDay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeadContainer({ isDay, setIsDay }: Props) {
  return (
    <Head>
      <HeadName>devfinder</HeadName>
      <ModeButton
        onClick={() => {
          setIsDay(!isDay);
        }}>
        {isDay ? <Dark /> : <Light />}
      </ModeButton>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38px;
  @media ${device.tablet} {
  }
`;

const HeadName = styled.div`
  color: ${({ theme }) => theme.siteName};
  font-size: 26px;
  line-height: 38px;
  font-weight: 700;
`;

const ModeButton = styled.button`
  all: unset;
  width: 90px;
  height: 38px;
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.buttonText};
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 2.5px;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }

  &:hover path {
    fill: ${({ theme }) => theme.buttonHover};
  }
  &:hover line {
    stroke: ${({ theme }) => theme.buttonHover};
  }
  &:hover circle {
    fill: ${({ theme }) => theme.buttonHover};
  }
`;
