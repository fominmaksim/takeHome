import React from "react";
import styled from "styled-components";
import { Results } from "../services/types";
import "react-responsive-modal/styles.css";
import "../modalStyles.css";
import InfoModal from "../components/Modal";
const Title = styled.h3`
  color: white;
  margin-bottom: 1rem;
  margin-top: 3rem;
  font-size: 20px;
`;
const ItemTitle = styled.p`
  color: white;
  margin-bottom: 0.5rem;
  font-size: 18px;
`;
const ItemDescription = styled.p`
  color: #b4b4b4;
  font-size: 14px;
`;
const Dot = styled.span`
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Item = styled.div`
  display: flex;
  border-bottom: 1px solid #252525;
  padding: 1rem 0.5rem;
  &:last-of-type {
    border-bottom: none;
  }
`;
const Cover = styled.img`
  margin-right: 1rem;
  border-radius: 2px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const SubDescription = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    width: 100%;
    display: block;
  }
`;
const Info = styled.div`
  align-self: center;
  justify-self: flex-end;
`;

const LinkExternal = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

interface SearchResultProps {
  label: string;
  data: Results[];
}
const SearchResult: React.FunctionComponent<SearchResultProps> = ({
  label,
  data,
}) => {
  
  return (
    <>
      <Title>{label[0].toUpperCase() + label.substring(1)}</Title>
      {data.map((el: Results) => {
        return (
          <Item key={el.artistName}>
            <Cover src={el.artworkUrl60} alt="cover" />
            <Description>
              <ItemTitle>
                <LinkExternal href={el.trackViewUrl} target="_blank">
                  {el.trackCensoredName}
                </LinkExternal>
              </ItemTitle>
              <SubDescription>
                <ItemDescription>
                  <LinkExternal href={"/"} target="_blank">
                    {el.artistName}
                  </LinkExternal>{" "}
                  &nbsp;
                  <Dot>&#8226;</Dot>&nbsp;
                </ItemDescription>
                <ItemDescription>
                  {` `}
                  <LinkExternal href={el.collectionViewUrl} target="_blank">
                    {el.collectionCensoredName}
                  </LinkExternal>
                </ItemDescription>
              </SubDescription>
            </Description>
            <Info>
              <InfoModal content={{el}}/>
            </Info>
          </Item>
        );
      })}
    </>
  );
};

export default SearchResult;
