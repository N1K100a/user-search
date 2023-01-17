import React from "react";
import styled from "styled-components";
import moment from "moment";
import Location from "../Icons/Location";
import Twitter from "../Icons/Twitter";
import Blog from "../Icons/Blog";
import Company from "../Icons/Company";
import { device } from "../deviceSizes/deviceSizes";

interface Props {
  apiData: {
    avatar_url: string;
    login: string;
    name: string;
    created_at: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    twitter_username: string;
    blog: string;
    company: string;
  } | null;
  dayShadow: {};
}

export default function ResultContainer({ apiData, dayShadow }: Props) {
  const formatedDate = moment(apiData?.created_at).format("DD MMM YYYY");

  const notAvailable = {
    opacity: "0.5",
    PointerEvents: "none !important",
  };
  return (
    <>
      {apiData && (
        <ResultCon style={dayShadow}>
          <UserImg src={apiData.avatar_url} />
          <RightSide>
            <NameCon>
              <UserNameCon>
                <UserName>{apiData.name}</UserName>
                <LoginName>@{apiData.login}</LoginName>
              </UserNameCon>
              <DayOut>Joined {formatedDate}</DayOut>
            </NameCon>
            <Bio>{apiData.bio ? apiData.bio : "This profile has no bio"}</Bio>
            <InfoNumCon>
              <InfoItem>
                <InfoTitle>Repos</InfoTitle>
                <InfoNum>{apiData.public_repos}</InfoNum>
              </InfoItem>
              <InfoItem>
                <InfoTitle>Followers</InfoTitle>
                <InfoNum>{apiData.followers}</InfoNum>
              </InfoItem>
              <InfoItem>
                <InfoTitle>Following</InfoTitle>
                <InfoNum>{apiData.following}</InfoNum>
              </InfoItem>
            </InfoNumCon>
            <OtherInfoCon>
              <OtherItems style={!apiData.location ? notAvailable : {}}>
                <Location />
                <IconText>
                  {apiData.location ? apiData.location : "Not Available"}
                </IconText>
              </OtherItems>
              <OtherItems style={!apiData.twitter_username ? notAvailable : {}}>
                <Twitter />
                <IconText>
                  {apiData.twitter_username
                    ? apiData.twitter_username
                    : "Not Available"}
                </IconText>
              </OtherItems>
              <OtherItems style={!apiData.blog ? notAvailable : {}}>
                <ALink
                  style={{ pointerEvents: !apiData.blog ? "none" : "auto" }}
                  href={apiData.blog && apiData.blog}>
                  <Blog />
                  <IconText>
                    {apiData.blog ? apiData.blog : "Not Available"}
                  </IconText>
                </ALink>
              </OtherItems>
              <OtherItems style={!apiData.company ? notAvailable : {}}>
                <Company />
                <IconText>
                  {apiData.company ? apiData.company : "Not Available"}
                </IconText>
              </OtherItems>
            </OtherInfoCon>
          </RightSide>
        </ResultCon>
      )}
    </>
  );
}

const ResultCon = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.boxColor};
  margin-top: 24px;
  border-radius: 15px;
  padding: 48px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media ${device.tablet} {
    padding: 40px;
  }

  @media ${device.mobile} {
    padding: 30px;
  }
  @media ${device.smallMobile} {
    padding: 30px 24px;
  }
`;

const UserImg = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 37px;

  @media ${device.tablet} {
    position: absolute;
  }
  @media ${device.smallTablet} {
    height: 105px;
    width: 105px;
  }

  @media ${device.mobile} {
    height: 95px;
    width: 95px;
  }
  @media ${device.smallMobile} {
    height: 70px;
    width: 70px;
  }
`;

const RightSide = styled.div`
  width: 100%;
  height: auto;
`;

const NameCon = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    display: block;
    padding-left: 158px;
    padding-top: 12px;
    min-height: 100px;
  }
  @media ${device.smallTablet} {
    display: block;
    padding-left: 138px;
    padding-top: 12px;
    min-height: 90px;
  }
  @media ${device.mobile} {
    padding-left: 118px;
    padding-top: 0;
    min-height: 75px;
  }
  @media ${device.smallMobile} {
    padding-left: 90px;
    min-height: 70px;
  }
`;

const UserNameCon = styled.div``;

const UserName = styled.h3`
  font-size: 26px;
  line-height: 39px;
  color: ${({ theme }) => theme.userName};

  @media ${device.smallTablet} {
    font-size: 20px;
    line-height: 30px;
  }
  @media ${device.mobile} {
    font-size: 18px;
  }
  @media ${device.smallMobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const LoginName = styled.p`
  color: #0079ff;
  font-size: 16px;
  margin-top: 4px;
  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const DayOut = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-top: 9px;
  color: ${({ theme }) => theme.smallText};
  font-weight: 400;
  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const Bio = styled.p`
  margin-top: 20px;
  line-height: 25px;
  font-size: 15px;
  color: ${({ theme }) => theme.smallText};
  opacity: 0.7;

  @media ${device.tablet} {
    margin-top: 38px;
  }
  @media ${device.smallMobile} {
    margin-top: 34px;
  }
`;

const InfoNumCon = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  background-color: ${({ theme }) => theme.infoColor};
  border-radius: 10px;
  margin-top: 32px;
  padding: 15px 32px;
  justify-content: space-between;
  @media ${device.mobile} {
    padding: 18px 5px;
    justify-content: space-around;
  }
`;

const InfoItem = styled.div`
  &:last-child {
    margin-right: 50px;

    @media ${device.smallTablet} {
      margin-right: 0;
    }
  }
`;

const InfoTitle = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.smallText};
  @media ${device.mobile} {
    text-align: center;
    font-size: 11px;
  }
`;
const InfoNum = styled.div`
  font-size: 22px;
  line-height: 33px;
  font-weight: 700;
  color: ${({ theme }) => theme.infoNumber};
  @media ${device.mobile} {
    text-align: center;
    font-size: 16px;
  }
`;

const OtherInfoCon = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 37px;
  @media ${device.mobile} {
    display: block;
    margin-top: 24px;
  }
`;

const OtherItems = styled.div`
  width: calc(50% - 10px);
  font-size: 15px;
  line-height: 23px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.smallText};
  text-transform: capitalize;
  position: relative;
  @media ${device.mobile} {
    margin-bottom: 18px;
    width: auto;
  }
`;

const ALink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.smallText};
  height: auto;
  display: flex;
`;

const IconText = styled.div`
  position: absolute;
  left: 35px;
  text-overflow: ellipsis;
  width: calc(100% - 35px);
  overflow: hidden;
`;
