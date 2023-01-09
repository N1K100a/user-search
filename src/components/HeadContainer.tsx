import React from "react";
import styled from "styled-components";

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
        {isDay ? "LIGHT" : "DARK"}
      </ModeButton>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38px;
`;

const HeadName = styled.div`
  color: white;
  font-size: 26px;
  line-height: 38px;
  font-weight: 700;
`;

const ModeButton = styled.button`
  all: unset;
  width: 100px;
  height: 38px;
  text-align: center;
  cursor: pointer;
  color: white;
  font-size: 13px;
  font-weight: 700;
`;
