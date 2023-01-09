import React from "react";
import styled from "styled-components";
import moment from "moment";
import shape from "../assets/Shape.png";
import iconUrl from "../assets/002-url.png";
import Path from "../assets/Path.png";
import iconOffice from "../assets/office-building.png";

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
}

export default function ResultContainer({ apiData }: Props) {
  const formatedDate = moment(apiData?.created_at).format("DD MMM YYYY");
  const lastMargin = {
    marginRight: "50px",
  };

  const notAvailable = {
    opacity: "0.5",
    PointerEvents: "none !important",
  };
  return (
    <>
      {apiData && (
        <ResultCon>
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
              <InfoItem style={lastMargin}>
                <InfoTitle>Following</InfoTitle>
                <InfoNum>{apiData.following}</InfoNum>
              </InfoItem>
            </InfoNumCon>
            <OtherInfoCon>
              <OtherItems style={!apiData.location ? notAvailable : {}}>
                <Icons src={shape} />{" "}
                {apiData.location ? apiData.location : "Not Available"}
              </OtherItems>
              <OtherItems style={!apiData.twitter_username ? notAvailable : {}}>
                <Icons src={Path} />
                {apiData.twitter_username
                  ? apiData.twitter_username
                  : "Not Available"}
              </OtherItems>
              <OtherItems style={!apiData.blog ? notAvailable : {}}>
                <ALink
                  style={{ pointerEvents: !apiData.blog ? "none" : "auto" }}
                  href={apiData.blog && apiData.blog}>
                  <Icons src={iconUrl} />{" "}
                  {apiData.blog ? apiData.blog : "Not Available"}
                </ALink>
              </OtherItems>
              <OtherItems style={!apiData.company ? notAvailable : {}}>
                <Icons src={iconOffice} />
                {apiData.company ? apiData.company : "Not Available"}
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
`;

const UserImg = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
`;

const RightSide = styled.div`
  width: 480px;
  height: auto;
`;

const NameCon = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserNameCon = styled.div``;

const UserName = styled.h3`
  font-size: 26px;
  line-height: 39px;
  color: ${({ theme }) => theme.userName};
`;

const LoginName = styled.p`
  color: #0079ff;
  font-size: 16px;
  margin-top: 4px;
`;

const DayOut = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-top: 9px;
  height: 20px;
  color: ${({ theme }) => theme.smallText};
  font-weight: 400;
`;

const Bio = styled.p`
  margin-top: 20px;
  line-height: 25px;
  font-size: 15px;
  color: ${({ theme }) => theme.smallText};
  opacity: 0.7;
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
`;

const InfoItem = styled.div``;

const InfoTitle = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.smallText};
`;
const InfoNum = styled.div`
  font-size: 22px;
  line-height: 33px;
  font-weight: 700;
  color: ${({ theme }) => theme.infoNumber};
`;

const OtherInfoCon = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 37px;
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
`;

const ALink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.smallText};
  height: auto;
  display: flex;
`;

const Icons = styled.img`
  height: 20px;
  margin-right: 22px;
`;
