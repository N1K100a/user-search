import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Icon from "./../assets/icon.png";
import arrowIcon from "./../assets/arrows.svg";
import { device } from "../deviceSizes/deviceSizes";

interface Props {
  setApiData: React.Dispatch<React.SetStateAction<null>>;
  setIsResult: React.Dispatch<React.SetStateAction<boolean>>;
  dayShadow: {};
}

export function SearchContainer({ setApiData, setIsResult, dayShadow }: Props) {
  const [userName, setUserName] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const API_URL = "https://api.github.com/users/";
  const sendRequest = async () => {
    if (!isError && userName && !loading) {
      setLoading(true);
      fetch(API_URL + userName)
        .then((response) => {
          if (!response.ok) {
            throw new Error("error");
          } else {
            setIsError(false);
            setIsResult(true);
          }
          return response.json();
        })
        .then((data) => {
          setApiData(data);
          setUserName("");
        })
        .catch((error) => {
          setIsError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <SearchCon style={dayShadow}>
      <SearchImg src={Icon} />
      <SearchInput
        type="text"
        value={userName}
        placeholder="Search GitHub username…"
        onChange={(e) => {
          setUserName(e.target.value);
          setIsError(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendRequest();
          }
        }}
      />
      <SearchBtn
        onClick={() => {
          sendRequest();
        }}>
        Search
      </SearchBtn>
      {isError && <ErrText>No results</ErrText>}
      {loading && <LoadingCircle src={arrowIcon} />}
    </SearchCon>
  );
}

const SearchCon = styled.div`
  padding: 0 10px 0 32px;
  margin-top: 35px;
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.boxColor};
  border-radius: 15px;
  display: flex;
  align-items: center;
  position: relative;
  @media ${device.smallMobile} {
    height: 60px;
    padding: 0 7px 0 16px;
  }
`;

const SearchInput = styled.input`
  outline: none !important;
  font-size: 18px;
  font-weight: 400;
  border: none;
  width: 100%;
  height: 40px;
  margin: 0 24px;
  color: ${({ theme }) => theme.smallText};
  background-color: transparent;
  @media ${device.smallTablet} {
    font-size: 15px;
  }
  @media ${device.mobile} {
    font-size: 13px;
  }
  @media ${device.smallMobile} {
    margin: 0 7px;
  }
`;

const SearchBtn = styled.button`
  height: 50px;
  width: 106px;
  background-color: #0079ff;
  border: none;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: #60abff;
  }
  @media ${device.mobile} {
    width: 84px;
  }
  @media ${device.smallMobile} {
    height: 46px;
    font-size: 14px;
  }
`;

const SearchImg = styled.img`
  height: 24px;
  width: 24px;
`;

const ErrText = styled.p`
  height: auto;
  width: auto;
  font-size: 15px;
  position: absolute;
  right: 140px;
  pointer-events: none;
  font-weight: 700;
  color: #f74646;
  @media ${device.mobile} {
    right: 105px;
  }
`;

const animation = keyframes`
0% { transform: rotateZ(0) }
100% { transform: rotateZ(360deg) }
`;

const LoadingCircle = styled.img`
  height: 25px;
  width: 25px;
  position: absolute;
  right: 170px;
  pointer-events: none;
  animation-name: ${animation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border: none;
  @media ${device.mobile} {
    right: 135px;
  }
`;
